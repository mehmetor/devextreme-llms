const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const componentName = process.argv[2];

if (!componentName) {
    console.log('Kullanım: node generate-doc.js <ComponentName>');
    console.log('Örnek: node generate-doc.js DataGrid');
    process.exit(1);
}

// PascalCase to kebab-case (e.g., DataGrid -> data-grid)
const kebabCase = componentName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

// Dosya yolları
const repoRoot = path.join(__dirname, 'DevExtreme');

if (!fs.existsSync(repoRoot)) {
    console.error(`\n❌ Hata: DevExtreme kaynak klasörü bulunamadı: ${repoRoot}`);
    console.log('Lütfen DevExtreme reposunu bu dizine klonlayın veya bir sembolik link oluşturun.');
    console.log('Komut: ln -s /yol/to/DevExtreme DevExtreme');
    process.exit(1);
}

const entryPoint = path.join(repoRoot, 'packages/devextreme-react/src', `${kebabCase}.ts`);
const outDir = path.join(__dirname, 'react', componentName);

// Giriş dosyası kontrolü
if (!fs.existsSync(entryPoint)) {
    console.error(`Hata: Giriş dosyası bulunamadı: ${entryPoint}`);
    process.exit(1);
}

if (!fs.existsSync(path.join(__dirname, 'react'))) {
    fs.mkdirSync(path.join(__dirname, 'react'));
}

console.log(`${componentName} için döküman üretiliyor...`);

try {
    // Typedoc komutunu oluştur
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

    console.log(`Çalıştırılan komut: ${command}`);
    execSync(command, { stdio: 'inherit' });

    console.log(`\n✅ İşlem başarıyla tamamlandı.`);
    console.log(`Döküman konumu: ${outDir}`);

    // AI Optimizasyonu: llms-full.txt ve llms.txt oluşturma
    generateAiDocs(outDir, componentName);

} catch (error) {
    console.error('\n❌ Hata oluştu:', error.message);
    process.exit(1);
}

function generateAiDocs(dir, name) {
    console.log(`\n🤖 AI optimizasyon dosyaları üretiliyor (${name})...`);
    
    let fullContent = `# ${name} Full API Documentation\n\n`;
    
    // Dosyaları belirli bir sırayla birleştir (README en üstte)
    const filesToMerge = [];
    
    function walkDir(currentPath) {
        const files = fs.readdirSync(currentPath);
        for (const file of files) {
            const filePath = path.join(currentPath, file);
            if (fs.statSync(filePath).isDirectory()) {
                walkDir(filePath);
            } else if (file.endsWith('.md')) {
                if (file === 'README.md' && currentPath === dir) {
                    filesToMerge.unshift(filePath); // Ana README en başa
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

    // llms-full.txt yaz
    fs.writeFileSync(path.join(dir, 'llms-full.txt'), fullContent);
    console.log(`- llms-full.txt oluşturuldu.`);

    // llms.txt (bileşene özel) yaz
    const llmsContent = `# ${name} Documentation Map
    
Bu dizin ${name} bileşeni için AI-optimize dökümantasyon içerir.

## Ana Dosyalar
- [Full API (Tek Dosya)](./llms-full.txt): AI modelleri için önerilen tüm API içeriği.
- [README](./README.md): Bileşene genel bakış.

## Dizin Yapısı
- \`interfaces/\`: Props ve konfigürasyon arayüzleri.
- \`type-aliases/\`: Tip tanımlamaları.
- \`variables/\`: Sabitler ve olay işleyiciler.
`;
    fs.writeFileSync(path.join(dir, 'llms.txt'), llmsContent);
    console.log(`- llms.txt oluşturuldu.`);

    // Root llms.txt dosyasını güncelle
    updateRootLlms();
}

function updateRootLlms() {
    const rootLlmsPath = path.join(__dirname, 'llms.txt');
    
    let content = `# DevExtreme LLM Hub

DevExtreme bileşenleri için AI-optimize (Cursor, Claude, Windsurf vb.) dökümantasyon merkezi.

## ⚛️ React
DevExtreme React bileşenleri için AI kılavuzları.

`;

    const reactDir = path.join(__dirname, 'react');
    if (fs.existsSync(reactDir)) {
        const components = fs.readdirSync(reactDir).filter(f => 
            fs.statSync(path.join(reactDir, f)).isDirectory()
        );

        components.sort().forEach(comp => {
            content += `- **${comp}**: [Özet](./react/${comp}/llms.txt) | [Full API](./react/${comp}/llms-full.txt)\n`;
        });
    }

    content += `
## 🛠️ Araçlar
- \`generate-doc.js\`: Yeni bileşenler için döküman ve AI dosyalarını üretir.
- \`generate-all-docs.js\`: Tüm bileşenleri otomatik tarar ve üretir.

---
*Gelecekte Angular ve Vue dökümanları da buraya eklenecektir.*
`;

    fs.writeFileSync(rootLlmsPath, content);
    console.log(`- Root llms.txt güncellendi.`);
}
