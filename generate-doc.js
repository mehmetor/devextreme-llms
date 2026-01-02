const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const componentName = process.argv[2];

if (!componentName) {
    console.log('Usage: node generate-doc.js <ComponentName>');
    console.log('Example: node generate-doc.js DataGrid');
    process.exit(1);
}

// PascalCase to kebab-case (e.g., DataGrid -> data-grid)
const kebabCase = componentName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

// File paths
const repoRoot = path.join(__dirname, 'DevExtreme');

if (!fs.existsSync(repoRoot)) {
    console.error(`\n❌ Error: DevExtreme source folder not found: ${repoRoot}`);
    console.log('Please clone the DevExtreme repo into this directory or create a symbolic link.');
    console.log('Command: ln -s /path/to/DevExtreme DevExtreme');
    process.exit(1);
}

const entryPoint = path.join(repoRoot, 'packages/devextreme-react/src', `${kebabCase}.ts`);
const outDir = path.join(__dirname, 'react', componentName);

// Entry file check
if (!fs.existsSync(entryPoint)) {
    console.error(`Error: Entry file not found: ${entryPoint}`);
    process.exit(1);
}

if (!fs.existsSync(path.join(__dirname, 'react'))) {
    fs.mkdirSync(path.join(__dirname, 'react'));
}

console.log(`Generating documentation for ${componentName}...`);

try {
    // Create Typedoc command
    const typedocBin = fs.existsSync(path.join(__dirname, 'node_modules/.bin/typedoc')) 
        ? path.join(__dirname, 'node_modules/.bin/typedoc')
        : 'npx typedoc';

    const command = [
        typedocBin,
        '--plugin typedoc-plugin-markdown',
        `--entryPoints ${entryPoint}`,
        `--out ${outDir}`,
        `--name "DevExtreme React ${componentName} API"`,
        '--hideGenerator true',
        '--entryPointStrategy expand',
        '--excludeInternal true',
        '--skipErrorChecking true'
    ].join(' ');

    console.log(`Executing command: ${command}`);
    execSync(command, { stdio: 'inherit' });

    console.log(`\n✅ Process completed successfully.`);
    console.log(`Documentation location: ${outDir}`);

    // AI Optimization: Create llms-full.txt and llms.txt
    generateAiDocs(outDir, componentName);

} catch (error) {
    console.error('\n❌ Error occurred:', error.message);
    process.exit(1);
}

function generateAiDocs(dir, name) {
    console.log(`\n🤖 Generating AI optimization files for ${name}...`);
    
    let fullContent = `# ${name} Full API Documentation\n\n`;
    
    // Merge files in a specific order (README at top)
    const filesToMerge = [];
    
    function walkDir(currentPath) {
        const files = fs.readdirSync(currentPath);
        for (const file of files) {
            const filePath = path.join(currentPath, file);
            if (fs.statSync(filePath).isDirectory()) {
                walkDir(filePath);
            } else if (file.endsWith('.md')) {
                if (file === 'README.md' && currentPath === dir) {
                    filesToMerge.unshift(filePath); // Main README at the beginning
                } else {
                    filesToMerge.push(filePath);
                }
            }
        }
    }

    walkDir(dir);

    for (const file of filesToMerge) {
        const relativePath = path.relative(dir, file);
        const content = fs.readFileSync(file, 'utf8');
        fullContent += `\n--- SOURCE: ${relativePath} ---\n\n${content}\n`;
    }

    // Write llms-full.txt
    fs.writeFileSync(path.join(dir, 'llms-full.txt'), fullContent);
    console.log(`- llms-full.txt created.`);

    // Write llms.txt (component-specific)
    const llmsContent = `# ${name} Documentation Map
    
This directory contains AI-optimized documentation for the ${name} component.

## Core Files
- [Full API (Single File)](./llms-full.txt): Recommended full API content for AI models.
- [README](./README.md): Component overview.

## Directory Structure
- \`interfaces/\`: Props and configuration interfaces.
- \`type-aliases/\`: Type definitions.
- \`variables/\`: Constants and event handlers.
`;
    fs.writeFileSync(path.join(dir, 'llms.txt'), llmsContent);
    console.log(`- llms.txt created.`);

    // Update root llms.txt
    updateRootLlms();
}

function updateRootLlms() {
    const rootLlmsPath = path.join(__dirname, 'llms.txt');
    
    let content = `# DevExtreme LLM Hub

AI-optimized documentation (llms.txt) for DevExtreme components, designed for AI assistants like Cursor, Claude, and Windsurf.

## ⚛️ React
AI-ready documentation for DevExtreme React components.

`;

    const reactDir = path.join(__dirname, 'react');
    if (fs.existsSync(reactDir)) {
        const components = fs.readdirSync(reactDir).filter(f => 
            fs.statSync(path.join(reactDir, f)).isDirectory()
        );

        components.sort().forEach(comp => {
            content += `- **${comp}**: [Summary](./react/${comp}/llms.txt) | [Full API](./react/${comp}/llms-full.txt)\n`;
        });
    }

    content += `
## 🛠️ Tools
- \`generate-doc.js\`: Generate documentation and AI files for a single component.
- \`generate-all-docs.js\`: Automatically scans and generates documentation for all components.

---
*Future support for Angular and Vue documentation is planned.*
`;

    fs.writeFileSync(rootLlmsPath, content);
    console.log(`- Root llms.txt updated.`);
}
