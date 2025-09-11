# Product Images Directory

This directory contains all product images organized by category and model.

## Directory Structure

```
products/
├── smart-covers/
│   ├── e2100/
│   │   ├── featured.jpg (main product image)
│   │   ├── gallery-1.jpg
│   │   ├── gallery-2.jpg
│   │   └── variants/
│   │       ├── gold.jpg
│   │       ├── silver.jpg
│   │       └── white.jpg
│   ├── e2102/
│   ├── e2200/
│   └── e2300/
└── smart-toilets/
    ├── e8201s/
    │   ├── featured.jpg
    │   ├── gallery-1.jpg
    │   └── gallery-2.jpg
    └── e8305s/
```

## Image Requirements

- **Featured images**: 16:9 aspect ratio, minimum 1200x675px
- **Gallery images**: 1:1 aspect ratio, minimum 800x800px
- **Variant images**: 1:1 aspect ratio, minimum 400x400px
- Format: JPG or WebP for optimal performance
- Naming convention: lowercase, hyphenated

## Current Database Image URLs

The database is currently configured with placeholder image URLs. Replace these with actual product images by:

1. Adding images to the appropriate directories
2. Updating the seed data in `src/lib/db/seed.ts`
3. Re-running the seed command: `pnpm db:seed`

## Image Sources

Images should be sourced from:
- Official EMU product catalogs
- High-quality product photography
- Manufacturer website: https://jieente.en.alibaba.com/