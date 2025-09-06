# Assets Directory

## Folder Structure

```
public/assets/
├── logos/          # Company logos and brand assets
├── backgrounds/    # Hero and section background images
├── videos/         # Company videos and demonstrations
└── images/         # General images and product photos
    └── products/   # Product images (E2100, E2300, E7200, etc.)
```

## Usage Instructions

### Logos
Place your EMU logo files in `/public/assets/logos/`:
- `emu-logo.png` - Main logo
- `emu-logo-white.png` - White version for dark backgrounds

### Background Images  
Place your hero background images in `/public/assets/backgrounds/`:
- `hero-mobile.jpeg` - Mobile hero background (portrait)
- `hero-desktop.jpeg` - Desktop hero background (landscape)

### Images
Place product images and other assets in `/public/images/`.

## File Naming Convention
- Use lowercase with hyphens: `smart-toilet-e2100.jpg`
- Include descriptive names: `bathroom-hero-background.jpg`
- Optimize images for web (WebP format recommended)

## Example Usage in Components
```tsx
// Logo in navigation
<Image src="/assets/logos/emu-logo.png" alt="EMU" width={120} height={40} />

// Responsive background images in hero
className="bg-[url('/assets/backgrounds/hero-mobile.jpeg')] md:bg-[url('/assets/backgrounds/hero-desktop.jpeg')]"
```