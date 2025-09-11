# EMU WC Website - Bildanforderungen und Speicherorte

## Verzeichnisstruktur

### Produktbilder
```
public/images/products/
├── smart-covers/
│   ├── e2100/
│   │   ├── featured.jpg      (Hauptbild für Produktkarten und Detailseite)
│   │   ├── gallery-1.jpg     (Galerie Bild 1)
│   │   ├── gallery-2.jpg     (Galerie Bild 2)
│   │   ├── gallery-3.jpg     (Galerie Bild 3, optional)
│   │   └── variants/         (Optional: Varianten-spezifische Bilder)
│   │       ├── gold.jpg
│   │       ├── silver.jpg
│   │       └── white.jpg
│   ├── e2102/
│   │   ├── featured.jpg
│   │   ├── gallery-1.jpg
│   │   ├── gallery-2.jpg
│   │   └── variants/
│   │       ├── classic.jpg
│   │       ├── economy.jpg
│   │       ├── u-form.jpg
│   │       └── v-form.jpg
│   ├── e2200/
│   │   ├── featured.jpg
│   │   ├── gallery-1.jpg
│   │   ├── gallery-2.jpg
│   │   └── variants/
│   │       ├── elongated.jpg
│   │       └── round.jpg
│   └── e2300/
│       ├── featured.jpg
│       ├── gallery-1.jpg
│       ├── gallery-2.jpg
│       ├── gallery-3.jpg
│       └── variants/
│           ├── white.jpg
│           └── beige.jpg
└── smart-toilets/
    ├── e8201s/
    │   ├── featured.jpg
    │   ├── gallery-1.jpg
    │   ├── gallery-2.jpg
    │   └── gallery-3.jpg
    └── e8305s/
        ├── featured.jpg
        ├── gallery-1.jpg
        ├── gallery-2.jpg
        └── gallery-3.jpg
```

### Kategoriebilder
```
public/images/categories/
├── smart-covers.jpg      (Für Smart Covers Kategoriepage)
└── smart-toilets.jpg     (Für Smart Toilets Kategoriepage)
```

## Bildanforderungen

### Produktbilder
- **Format**: JPG oder WebP (bevorzugt)
- **Featured Images**: 800x800px (1:1 quadratisch)
- **Gallery Images**: 800x800px (1:1 quadratisch)
- **Variant Images**: 400x400px (1:1 quadratisch)
- **Dateigröße**: Optimiert für Web (< 500KB pro Bild)
- **Qualität**: Hohe Auflösung, professionelle Produktfotografie
- **Hintergrund**: Sauberer, weißer oder neutraler Hintergrund bevorzugt

### Kategoriebilder
- **Format**: JPG oder WebP
- **Größe**: 600x400px (16:10 Format / 3:2 Format)
- **Dateigröße**: < 300KB
- **Inhalt**: Repräsentative Übersichtsbilder der Produktkategorie

## Namenskonventionen

- **Dateinamen**: lowercase, mit hyphens (kebab-case)
- **Beispiele**:
  - `featured.jpg`
  - `gallery-1.jpg`
  - `gold.jpg`
  - `smart-covers.jpg`

## Aktueller Status

Die Website verwendet derzeit Platzhalterbilder von `placehold.co`. Nach dem Hinzufügen echter Bilder müssen die URLs in der Datenbank aktualisiert werden:

1. Bilder in die entsprechenden Verzeichnisse hochladen
2. Seed-Daten in `src/lib/db/seed.ts` aktualisieren
3. Datenbank neu seeden: `pnpm db:seed`

## Bildquellen

- Offizielle EMU Produktkataloge
- Professionelle Produktfotografie
- Herstellerwebsite: https://jieente.en.alibaba.com/
- Aktuelle Website: https://emu-wc.com

## Performance-Optimierung

- Verwende Next.js Image Komponente für automatische Optimierung
- WebP Format für moderne Browser
- Responsive Images werden automatisch generiert
- Lazy Loading ist standardmäßig aktiviert

## Backup & Versionierung

- Originale in hoher Auflösung separat archivieren
- Optimierte Web-Versionen im Repository
- Bei Updates: alte Bilder umbenennen statt löschen