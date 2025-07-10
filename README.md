# Haresh's Portfolio Website

A modern, responsive portfolio website built with pure HTML, CSS, and JavaScript. No backend or database required!

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Interactive Animations**: Smooth scrolling, hover effects, and background animations
- **Project Showcase**: Organized by categories (Web Dev, Computer Vision, ML Research, App Development)
- **Experience Timeline**: Professional experience with document links
- **Contact Form**: Functional contact form with validation
- **Certificates Gallery**: Interactive certificate viewer

## Quick Start

### Option 1: Download and Run Locally

1. **Download the files**:
   - `index.html`
   - `styles.css` 
   - `script.js`

2. **Open in browser**:
   ```bash
   # Simply double-click index.html
   # OR use a local server:
   python -m http.server 8000
   ```

3. **View in browser**:
   - Direct file: `file:///path/to/index.html`
   - Local server: `http://localhost:8000`

### Option 2: Host on Any Platform

Upload the three files to any web hosting service:
- **Netlify**: Drag and drop the files
- **Vercel**: Connect to GitHub repo
- **GitHub Pages**: Push to repository
- **Any web host**: Upload via FTP

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## Customization

### Update Personal Information

Edit `script.js` to modify:
- Project data in `projectsData` object
- Certificate information in `certificatesData`
- Contact details in HTML

### Modify Styling

Edit `styles.css` to change:
- Color scheme (CSS variables at top)
- Animations and transitions
- Layout and spacing

### Add New Projects

Add to the appropriate category in `script.js`:

```javascript
'web-development': [
    {
        title: "Your Project Name",
        description: "Brief description",
        // ... other properties
    }
]
```

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ IE11+ (limited support)

## Performance

- **Lightweight**: ~50KB total size
- **Fast Loading**: No external dependencies
- **Optimized**: Efficient animations and lazy loading

## Deployment

### Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your files
3. Get instant live URL

### GitHub Pages
1. Create repository
2. Upload files
3. Enable Pages in settings

### Vercel
1. Connect GitHub repository
2. Auto-deploy on push

## License

MIT License - Feel free to use and modify!