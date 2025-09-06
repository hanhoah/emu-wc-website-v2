# Section Background Images

## Usage Instructions

### Parallax Background Image
Place your parallax background image for the Safety Development section here:
- `safety-development.jpg` - Manufacturing/factory background image

### Image Requirements for Parallax Effect
- **Format:** JPG (recommended) or PNG
- **Resolution:** Minimum 1920x1080 (Full HD)
- **Aspect Ratio:** 16:9 or wider for best parallax effect
- **File Size:** Optimize to under 500KB for good loading performance
- **Content:** Industrial/manufacturing theme showing production equipment

### CSS Implementation
The parallax effect is achieved with:
```css
bg-fixed bg-cover bg-center bg-no-repeat
```

This creates a fixed background attachment that scrolls at a different speed than the content, creating the parallax effect.

### Example Usage
```tsx
<section className="relative py-20 bg-fixed bg-cover bg-center bg-no-repeat min-h-[600px]"
         style={{
           backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/assets/backgrounds/sections/safety-development.jpg')`
         }}>
```

The linear gradient overlay (70% black opacity) ensures text readability over the background image.

## File Structure
```
public/assets/backgrounds/sections/
└── safety-development.jpg    # Parallax background for Safety Development section
```