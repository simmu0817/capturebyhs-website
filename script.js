// ==========================================
// PAGE LOADING
// ==========================================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    
    // Hide loader after page loads
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 500);
});

// ==========================================
// MOBILE MENU FUNCTIONALITY
// ==========================================
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('nav a');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking on a link
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
// SCROLL REVEAL ANIMATION
// ==========================================
const revealElements = document.querySelectorAll('.portfolio-item, .service-card, .about, .contact-card, .testimonial-card');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('reveal', 'active');
        }
    });
};

// Initial check on page load
window.addEventListener('load', revealOnScroll);

// Check on scroll with debounce
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(revealOnScroll);
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
// PARALLAX EFFECT FOR HERO
// ==========================================
const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroHeight = hero.offsetHeight;
    
    // Only apply parallax while hero is visible
    if (scrolled < heroHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / heroHeight);
    }
});

// ==========================================
// ANIMATED STATS COUNTER
// ==========================================
const stats = document.querySelectorAll('.stat-number');
let animated = false;

const animateStats = () => {
    const statsSection = document.querySelector('.stats');
    if (!statsSection) return;
    
    const statsPosition = statsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    
    if (statsPosition < screenPosition && !animated) {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            let current = 0;
            const increment = target / 50;
            const isPercent = stat.parentElement.querySelector('.stat-label').textContent.includes('%');
            
            const counter = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target + (isPercent ? '' : '+');
                    clearInterval(counter);
                } else {
                    stat.textContent = Math.floor(current) + (isPercent ? '' : '+');
                }
            }, 30);
        });
        
        animated = true;
    }
};

window.addEventListener('scroll', animateStats);
window.addEventListener('load', animateStats);

// ==========================================
// ACTIVE NAV LINK HIGHLIGHTING
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
// IMAGE ERROR HANDLING
// ==========================================
const images = document.querySelectorAll('img');

images.forEach(img => {
    img.addEventListener('error', function() {
        console.warn(`Failed to load image: ${this.src}`);
        
        // Create a placeholder if image fails to load
        if (!this.classList.contains('error-handled')) {
            this.classList.add('error-handled');
            
            // For portfolio and about images, show a colored background
            if (this.closest('.portfolio-item') || this.closest('.about-image')) {
                this.style.display = 'none';
                const parent = this.parentElement;
                parent.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)';
                parent.style.display = 'flex';
                parent.style.alignItems = 'center';
                parent.style.justifyContent = 'center';
                
                const placeholder = document.createElement('div');
                placeholder.style.color = '#c9a86a';
                placeholder.style.fontSize = '3rem';
                placeholder.textContent = '📸';
                parent.appendChild(placeholder);
            }
        }
    });
    
    // Check if image is loaded
    if (img.complete && img.naturalHeight === 0) {
        img.dispatchEvent(new Event('error'));
    }
});

// ==========================================
// LAZY LOADING FOR IMAGES
// ==========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                // Fade in once loaded
                img.onload = () => {
                    img.style.opacity = '1';
                };
                
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px'
    });
    
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// PORTFOLIO CARD SMOOTH TRANSITIONS
// ==========================================
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// ==========================================
// SERVICE CARDS HOVER EFFECTS
// ==========================================
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ==========================================
// CONTACT CARD ENHANCEMENTS
// ==========================================
const contactCards = document.querySelectorAll('.contact-card');

contactCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ==========================================
// KEYBOARD NAVIGATION
// ==========================================
document.addEventListener('keydown', (e) => {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
    }
    
    // Accessibility: Enter key for scroll to top
    if (e.key === 'Enter' && document.activeElement === scrollToTopBtn) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

// ==========================================
// TESTIMONIAL CARDS ANIMATION
// ==========================================
const testimonialCards = document.querySelectorAll('.testimonial-card');

testimonialCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================
// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// ==========================================
// PRELOAD CRITICAL IMAGES
// ==========================================
const criticalImages = [
    'Logo.jpg',
    'photo1.jpg',
    'photo2.jpg',
    'photo3.jpg',
    'photo4.jpg'
];

criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
});

// ==========================================
// CHECK IF IMAGES EXIST ON LOAD
// ==========================================
window.addEventListener('load', () => {
    const allImages = document.querySelectorAll('img');
    let loadedCount = 0;
    let errorCount = 0;
    
    allImages.forEach(img => {
        if (img.complete) {
            if (img.naturalHeight === 0) {
                errorCount++;
                console.warn(`Image not found: ${img.src}`);
            } else {
                loadedCount++;
            }
        }
    });
    
    console.log(`%c✅ Images loaded: ${loadedCount}`, 'color: #4CAF50; font-size: 14px;');
    if (errorCount > 0) {
        console.warn(`%c⚠️ Images failed: ${errorCount}`, 'color: #FF9800; font-size: 14px;');
        console.log('%cMake sure all image files are in the same folder as index.html', 'color: #2196F3; font-size: 12px;');
    }
});

// ==========================================
// CONSOLE MESSAGES
// ==========================================
console.log('%c📸 Capture by HS - Photography by Sim', 'font-size: 20px; font-weight: bold; color: #c9a86a;');
console.log('%cWebsite loaded successfully!', 'font-size: 14px; color: #4CAF50;');
console.log('%cContact: info@capturebyhs.ca | +1 (647) 354-6822', 'font-size: 12px; color: #a8a8a8;');

// ==========================================
// SCROLL PROGRESS INDICATOR (Optional)
// ==========================================
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #c9a86a, #e0c080);
        width: 0%;
        z-index: 10000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

// Uncomment to enable scroll progress bar
// createScrollProgress();

// ==========================================
// READY MESSAGE
// ==========================================
console.log('%c✨ All features loaded and ready!', 'font-size: 14px; color: #c9a86a; font-weight: bold;');
