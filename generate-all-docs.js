const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Bileşenlerin bulunduğu kaynak dizini
const srcDir = path.join(__dirname, 'DevExtreme', 'packages', 'devextreme-react', 'src');

if (!fs.existsSync(srcDir)) {
    console.error(`\n❌ Hata: Kaynak dizini bulunamadı: ${srcDir}`);
    console.log('Lütfen DevExtreme reposunun doğru konumda olduğundan emin olun.');
    process.exit(1);
}

console.log('🔍 Bileşenler taranıyor...');

// Dizindeki .ts dosyalarını oku (index.ts ve klasörler hariç)
const components = fs.readdirSync(srcDir)
    .filter(file => {
        const filePath = path.join(srcDir, file);
        return file.endsWith('.ts') && 
               file !== 'index.ts' && 
               fs.statSync(filePath).isFile();
    })
    .map(file => {
        // kebab-case to PascalCase (örn: data-grid.ts -> DataGrid)
        const baseName = path.basename(file, '.ts');
        return baseName
            .split('-')
            .map(part => part.charAt(0).toUpperCase() + part.slice(1))
            .join('');
    });

console.log(`🚀 Toplam ${components.length} bileşen bulundu. İşlem başlatılıyor...\n`);

const startTime = Date.now();
let successCount = 0;
let failCount = 0;

for (const component of components) {
    try {
        console.log(`\n[${successCount + failCount + 1}/${components.length}] --- ${component} ---`);
        // Mevcut generate-doc.js betiğini çalıştır
        execSync(`node generate-doc.js ${component}`, { stdio: 'inherit' });
        successCount++;
    } catch (error) {
        console.error(`❌ ${component} için docs üretilemedi.`);
        failCount++;
    }
}

const duration = ((Date.now() - startTime) / 1000).toFixed(2);

console.log('\n================================================');
console.log(`✅ İşlem Tamamlandı!`);
console.log(`⏱️ Süre: ${duration} saniye`);
console.log(`👍 Başarılı: ${successCount}`);
console.log(`👎 Başarısız: ${failCount}`);
console.log('================================================');

