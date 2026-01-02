# DevExtreme React AI Documentation Generator

Bu proje, DevExtreme React bileşenleri için AI modelleri (Cursor, Windsurf, Claude vb.) tarafından kolayca okunabilen, optimize edilmiş dökümantasyon üretmek amacıyla oluşturulmuştur.

## 📋 Ön Koşullar

Bu araç, döküman üretmek için **DevExtreme kaynak kodlarına** ihtiyaç duyar. 
1. [DevExtreme GitHub](https://github.com/DevExpress/DevExtreme) reposunu bilgisayarınıza klonlayın.
2. Reponun bu proje kök dizininde `DevExtreme/` adıyla bulunduğundan veya bir sembolik link (symlink) olduğundan emin olun.

## 🚀 Hızlı Başlangıç

### 1. Bağımlılıkları Kurun
```bash
npm install
```

### 2. Paketleri Linkleyin (Opsiyonel)
DevExtreme kaynak kodlarını yerel olarak kullanmak için paketleri linkleyebilirsiniz:
```bash
# devextreme
cd DevExtreme/packages/devextreme/artifacts/npm/devextreme && npm link

# devextreme-react
cd DevExtreme/packages/devextreme-react/npm && npm link
```

### 3. Döküman Üretin
Tek bir bileşen için döküman üretmek için:
```bash
node generate-doc.js <ComponentName>

# Örnek:
node generate-doc.js DataGrid
```

### 4. Tüm Bileşenleri Üretin
Tüm DevExtreme bileşenlerini otomatik olarak tarayıp dökümanlarını üretmek için:
```bash
node generate-all-docs.js
```

## 🤖 AI Optimizasyonu

Sistem, AI asistanlarının bileşenleri en iyi şekilde anlayabilmesi için üç katmanlı bir yapı kullanır:

1.  **Ana `llms.txt`**: Mevcut tüm platformların (React, Angular vb.) ve bileşenlerin listesi.
2.  **Bileşene Özel `llms.txt`**: (Örn: `react/DataGrid/llms.txt`) Bileşenin dizin yapısı ve özet bilgisi.
3.  **Bileşene Özel `llms-full.txt`**: (Örn: `react/DataGrid/llms-full.txt`) **[En Önemli]** Bileşenin tüm API dökümantasyonunun tek bir dosyada birleştirilmiş hali.

## 📁 Dizin Yapısı

- `DevExtreme/`: DevExtreme monorepo (kaynak kodlar).
- `react/`: Üretilen React Markdown dökümanları ve AI dosyaları.
- `docs-react-final/`: TypeDoc tarafından üretilen genel API dökümü.
- `generate-doc.js`: Ana otomasyon betiği.
- `llms.txt`: Tüm platformları kapsayan ana AI haritası.

## 🛠️ Araçlar

- **TypeDoc**: TypeScript tanımlarından döküman üretir.
- **typedoc-plugin-markdown**: Çıktıları Markdown formatında hazırlar.
- **Custom Bundler**: `generate-doc.js` içindeki özel fonksiyon, tüm çıktıları AI dostu tek bir dosyada birleştirir.

