# Videos Directory

## Usage Instructions

### Company Video
Place your company introduction video in this directory:
- `company-intro.mp4` - Main company introduction video for About Us section

### Supported Formats
- **MP4** (recommended) - Best browser compatibility
- **WebM** - Good for modern browsers
- **MOV** - Converted to MP4 for web use

### Optimization Guidelines
- **Resolution:** 1920x1080 (Full HD) maximum
- **Duration:** 2-3 minutes recommended  
- **File Size:** Under 50MB for good loading performance
- **Codec:** H.264 for MP4 files

### Example Usage in Components
```tsx
<video 
  controls 
  className="w-full rounded-lg"
  poster="/assets/images/video-thumbnail.jpg"
>
  <source src="/assets/videos/company-intro.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

## File Structure
```
public/assets/videos/
├── company-intro.mp4    # Main company video
├── product-demos/       # Product demonstration videos
└── testimonials/        # Customer testimonial videos
```