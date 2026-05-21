# Eye Lens - About Page Assets

This directory contains assets for the Eye Lens About page.

## Files

- **styles.css** - Main stylesheet for the About page with modern, responsive design
- **script.js** - Interactive features and animations (optional)

## Design Features

### Color Palette
- Primary Gradient: `#667eea` to `#764ba2`
- Text Dark: `#1a1a1a`
- Text Light: `#666666`
- Background Light: `#f8f9fa`
- Background White: `#ffffff`

### Typography
- System font stack for native appearance across platforms
- Responsive font sizes that scale on mobile devices
- Optimized line heights for readability

### Layout
- Fully responsive design (mobile, tablet, desktop)
- Max content width: 1200px
- Grid-based layouts for features and support sections
- Flexbox for header and navigation elements

### Components
- Hero section with badges
- Feature cards with hover effects
- Vision tests list with numbered items
- Premium features section with gradient background
- FAQ accordion-style items
- Footer with links and copyright

## Usage

To use these assets, ensure the About.html file references them correctly:

```html
<link rel="stylesheet" href="assets/styles.css" />
<script src="assets/script.js"></script>
```

## Customization

### Changing Colors
Update the CSS custom properties in `:root` selector in styles.css

### Adding New Sections
Follow the existing section structure and use the `.section-title` class for consistency

### Mobile Optimization
All breakpoints are defined at the bottom of styles.css:
- Tablet: 768px
- Mobile: 480px
