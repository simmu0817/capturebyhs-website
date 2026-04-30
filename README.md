# Capture by HS - Photography Website

Professional photography portfolio website for Sim, based in Montreal, Canada.

## 📁 Files Included

1. **index.html** - Main HTML structure
2. **style.css** - All styling and animations
3. **script.js** - Interactive JavaScript features
4. **Logo.jpg** - Your HS camera logo
5. **photo1.jpg** - Winter wedding photography
6. **photo2.jpg** - Engagement session
7. **photo3.jpg** - Wedding day portrait
8. **photo4.jpg** - Professional portrait
9. **README.md** - This file (setup instructions)

## ✨ Features

### User Experience
- ✅ **Fully Responsive** - Works on all devices (mobile, tablet, desktop)
- ✅ **Smooth Scrolling** - Elegant navigation between sections
- ✅ **Loading Screen** - Professional loading animation
- ✅ **Scroll Progress** - Visual indicator (optional)
- ✅ **Mobile Menu** - Hamburger menu for small screens
- ✅ **Scroll to Top** - Quick return to top button

### Visual Effects
- ✅ **Parallax Hero** - Beautiful hero section with depth
- ✅ **Animated Counters** - Stats count up when scrolled into view
- ✅ **Hover Effects** - All cards and images have smooth transitions
- ✅ **Fade-in Animations** - Elements reveal as you scroll
- ✅ **Image Lazy Loading** - Optimized image loading

### Content Sections
1. **Hero** - Eye-catching introduction
2. **Portfolio** - 4 portfolio items with hover effects
3. **About** - Personal introduction with stats
4. **Services** - 4 services with pricing
5. **Testimonials** - 3 client reviews (NEW!)
6. **Contact** - Email, phone, WhatsApp links
7. **Footer** - Quick navigation links

## 🚀 Quick Setup (Local Testing)

### Option 1: Direct Open
1. Make sure ALL files are in the SAME folder:
   - index.html
   - style.css
   - script.js
   - Logo.jpg
   - photo1.jpg
   - photo2.jpg
   - photo3.jpg
   - photo4.jpg

2. Double-click `index.html` to open in your browser

### Option 2: Local Server (Recommended)
If you have Python installed:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then visit: `http://localhost:8000`

## 🌐 Deploy to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New Repository"
3. Name it: `capturebyhs` (or any name you like)
4. Make it **Public**
5. Don't initialize with README
6. Click "Create Repository"

### Step 2: Upload Files
1. Click "uploading an existing file"
2. Drag and drop ALL files:
   - index.html
   - style.css
   - script.js
   - Logo.jpg
   - photo1.jpg
   - photo2.jpg
   - photo3.jpg
   - photo4.jpg
3. Add commit message: "Initial website upload"
4. Click "Commit changes"

### Step 3: Enable GitHub Pages
1. Go to repository **Settings**
2. Scroll to **Pages** section (left sidebar)
3. Under "Source", select **main** branch
4. Click **Save**
5. Wait 1-2 minutes
6. Your site will be live at: `https://yourusername.github.io/capturebyhs`

### Step 4: Add Custom Domain (capturebyhs.ca)
1. In GitHub Pages settings, add custom domain: `capturebyhs.ca`
2. In your domain provider (e.g., GoDaddy, Namecheap):
   - Add a **CNAME** record:
     - Host: `www`
     - Points to: `yourusername.github.io`
   - Add **A** records pointing to GitHub's IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
3. Wait 24-48 hours for DNS propagation
4. Enable **Enforce HTTPS** in GitHub Pages settings

## 🎨 Customization Guide

### Change Colors
Edit `style.css`, find the `:root` section at the top:

```css
:root {
    --accent: #c9a86a;  /* Change this for different accent color */
    --primary-bg: #000000;  /* Background color */
}
```

### Update Content
Edit `index.html`:
- **About Section**: Line ~110 - Change your bio
- **Services**: Line ~130 - Update services and pricing
- **Testimonials**: Line ~155 - Change client reviews
- **Contact**: Line ~180 - Update email/phone/WhatsApp

### Add More Photos
1. Add new image files to the folder
2. Edit `index.html` in the portfolio section
3. Copy an existing portfolio item and update the image src

Example:
```html
<div class="portfolio-item" data-category="wedding">
    <img src="photo5.jpg" alt="New Photo">
    <div class="portfolio-overlay">
        <h3>New Title</h3>
        <p>Photo Category</p>
    </div>
</div>
```

## 🐛 Troubleshooting

### Images Not Showing?
**Problem**: Images appear as broken links or don't load

**Solution**:
1. ✅ Make sure ALL image files are in the SAME folder as index.html
2. ✅ Check file names match EXACTLY (case-sensitive):
   - Logo.jpg (capital L)
   - photo1.jpg (lowercase p)
3. ✅ Open browser console (F12) and check for errors
4. ✅ Make sure files are uploaded to GitHub

### Logo Not Loading?
**Check**:
1. File is named exactly `Logo.jpg` (capital L)
2. File is in the same folder as index.html
3. Image is a valid JPG file

### Mobile Menu Not Working?
1. Clear browser cache (Ctrl+Shift+Delete)
2. Check if `script.js` is loaded
3. Open console (F12) and look for JavaScript errors

### Website Not Updating?
1. Clear browser cache
2. Wait a few minutes for GitHub Pages to rebuild
3. Try incognito/private browsing mode
4. Force refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

## 📱 Contact Information

Update in `index.html`:
- **Email**: info@capturebyhs.ca
- **Phone**: +1 (647) 354-6822
- **WhatsApp**: Same as phone
- **Instagram**: @capturebyhs
- **Facebook**: /capturebyhs

## 🔧 Technical Details

### Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

### Performance
- Loading screen for better UX
- Lazy loading images
- Optimized animations
- Debounced scroll events
- Compressed file sizes

### Accessibility
- Keyboard navigation support
- ARIA labels on buttons
- Alt text on all images
- Semantic HTML structure

## 📊 File Structure
```
capturebyhs/
│
├── index.html          # Main HTML file
├── style.css           # All styles
├── script.js           # All JavaScript
├── Logo.jpg            # Your logo
├── photo1.jpg          # Portfolio image 1
├── photo2.jpg          # Portfolio image 2
├── photo3.jpg          # Portfolio image 3
├── photo4.jpg          # Portfolio image 4
└── README.md           # This file
```

## 💡 Tips for Success

1. **Keep All Files Together**: Never separate HTML, CSS, JS, and images
2. **Test Locally First**: Open index.html before uploading
3. **Use Exact File Names**: Computers are case-sensitive
4. **Update Regularly**: Add new photos to keep portfolio fresh
5. **Check Mobile**: Test on your phone before going live
6. **Backup Files**: Keep copies of all files safe

## 📞 Need Help?

If you encounter issues:
1. Check the troubleshooting section above
2. Open browser console (F12) to see errors
3. Verify all files are uploaded correctly
4. Ensure file names match exactly

## 📝 License

© 2024 Capture by HS. All rights reserved.

---

**Built with ❤️ for Sim | Montreal, Canada**

🌐 Website: capturebyhs.ca
📧 Email: info@capturebyhs.ca
📱 Phone: +1 (647) 354-6822
