const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Source directory where components are located
const srcDir = path.join(__dirname, 'DevExtreme', 'packages', 'devextreme-react', 'src');

if (!fs.existsSync(srcDir)) {
    console.error(`\n❌ Error: Source directory not found: ${srcDir}`);
    console.log('Please ensure the DevExtreme repo is in the correct location.');
    process.exit(1);
}

console.log('🔍 Scanning for components...');

// Read .ts files in directory (excluding index.ts and folders)
const components = fs.readdirSync(srcDir)
    .filter(file => {
        const filePath = path.join(srcDir, file);
        return file.endsWith('.ts') && 
               file !== 'index.ts' && 
               fs.statSync(filePath).isFile();
    })
    .map(file => {
        // kebab-case to PascalCase (e.g., data-grid.ts -> DataGrid)
        const baseName = path.basename(file, '.ts');
        return baseName
            .split('-')
            .map(part => part.charAt(0).toUpperCase() + part.slice(1))
            .join('');
    });

console.log(`🚀 Found ${components.length} components. Starting process...\n`);

const startTime = Date.now();
let successCount = 0;
let failCount = 0;

for (const component of components) {
    try {
        console.log(`\n[${successCount + failCount + 1}/${components.length}] --- ${component} ---`);
        // Execute the existing generate-doc.js script
        execSync(`node generate-doc.js ${component}`, { stdio: 'inherit' });
        successCount++;
    } catch (error) {
        console.error(`❌ Failed to generate docs for ${component}.`);
        failCount++;
    }
}

const duration = ((Date.now() - startTime) / 1000).toFixed(2);

console.log('\n================================================');
console.log(`✅ Process Completed!`);
console.log(`⏱️ Duration: ${duration} seconds`);
console.log(`👍 Successful: ${successCount}`);
console.log(`👎 Failed: ${failCount}`);
console.log('================================================');
