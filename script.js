// ==========================================
// EFFICIENT WEBSITE - NO PARALLAX
// ALL PHOTOS ALWAYS VISIBLE
// ==========================================

// Mobile Menu
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('nav a');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// ==========================================
// SMOOTH SCROLLING
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// HEADER SCROLL EFFECT
// ==========================================
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// ACTIVE NAV LINK
// ==========================================
const sections = document.querySelectorAll('section[id]');

const highlightNav = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNav);

// ==========================================
// ENSURE ALL IMAGES ARE VISIBLE
// ==========================================
window.addEventListener('load', () => {
    // Force all images to be visible
    const allImages = document.querySelectorAll('img');
    allImages.forEach(img => {
        img.style.opacity = '1';
        img.style.visibility = 'visible';
    });
    
    // Force all sections to be visible
    const allSections = document.querySelectorAll('section');
    allSections.forEach(section => {
        section.style.opacity = '1';
        section.style.visibility = 'visible';
        section.style.transform = 'none';
    });
    
    // Force portfolio cards to be visible
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach(card => {
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.style.transform = 'translateY(0)';
    });
    
    console.log('%c✅ All images and sections are visible!', 'color: #4CAF50; font-size: 14px; font-weight: bold;');
});

// ==========================================
// IMAGE ERROR HANDLING
// ==========================================
const images = document.querySelectorAll('img');

images.forEach(img => {
    img.addEventListener('error', function() {
        console.warn(`Failed to load: ${this.src}`);
        
        // Show placeholder
        if (!this.classList.contains('error-handled')) {
            this.classList.add('error-handled');
            const parent = this.parentElement;
            
            if (parent.classList.contains('portfolio-image') || parent.classList.contains('about-image')) {
                parent.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)';
                parent.style.display = 'flex';
                parent.style.alignItems = 'center';
                parent.style.justifyContent = 'center';
                
                this.style.display = 'none';
                
                const placeholder = document.createElement('div');
                placeholder.style.fontSize = '4rem';
                placeholder.textContent = '📸';
                parent.appendChild(placeholder);
            }
        }
    });
    
    // Check if image failed to load
    if (img.complete && img.naturalHeight === 0) {
        img.dispatchEvent(new Event('error'));
    }
});

// ==========================================
// KEYBOARD NAVIGATION
// ==========================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// ==========================================
// PERFORMANCE MONITORING
// ==========================================
window.addEventListener('load', () => {
    const allImages = document.querySelectorAll('img');
    let loadedCount = 0;
    let errorCount = 0;
    
    allImages.forEach(img => {
        if (img.complete) {
            if (img.naturalHeight === 0) {
                errorCount++;
            } else {
                loadedCount++;
            }
        }
    });
    
    console.log('%c📸 Capture by HS - Professional Photography', 'font-size: 18px; font-weight: bold; color: #d4af37;');
    console.log(`%c✅ Images loaded: ${loadedCount}`, 'color: #4CAF50; font-size: 12px;');
    
    if (errorCount > 0) {
        console.warn(`%c⚠️ Images failed: ${errorCount}`, 'color: #FF9800; font-size: 12px;');
        console.log('%cMake sure all image files are in the same folder as index.html', 'color: #2196F3; font-size: 11px;');
    }
    
    console.log('%c📍 Location: Toronto, Canada', 'color: #d4af37; font-size: 12px;');
    console.log('%c📧 Contact: info@capturebyhs.ca | +1 (647) 354-6822', 'color: #a0a0a0; font-size: 11px;');
});

// ==========================================
// PREVENT IMAGES FROM DISAPPEARING
// ==========================================
// This ensures images NEVER fade out or disappear
setInterval(() => {
    const allImages = document.querySelectorAll('img');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    const sections = document.querySelectorAll('section');
    
    allImages.forEach(img => {
        if (img.style.opacity !== '1') {
            img.style.opacity = '1';
        }
        if (img.style.visibility !== 'visible') {
            img.style.visibility = 'visible';
        }
    });
    
    portfolioCards.forEach(card => {
        if (card.style.opacity !== '1') {
            card.style.opacity = '1';
        }
    });
    
    sections.forEach(section => {
        if (section.style.opacity !== '1') {
            section.style.opacity = '1';
        }
    });
}, 100); // Check every 100ms to keep images visible

console.log('%c✨ Website loaded successfully! All photos will stay visible.', 'color: #d4af37; font-size: 14px; font-weight: bold;');
