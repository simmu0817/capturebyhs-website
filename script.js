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
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for styling
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================
const revealElements = document.querySelectorAll('.portfolio-item, .service-card, .about, .contact-card');

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

// Check on scroll
window.addEventListener('scroll', revealOnScroll);

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
// PORTFOLIO IMAGE LAZY LOADING
// ==========================================
const portfolioImages = document.querySelectorAll('.portfolio-item img');

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

portfolioImages.forEach(img => {
    imageObserver.observe(img);
});

// ==========================================
// PORTFOLIO HOVER SOUND EFFECT (Optional)
// ==========================================
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// ==========================================
// ANIMATE STATS ON SCROLL
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
            const finalValue = stat.textContent;
            const isPercent = finalValue.includes('%');
            const numericValue = parseInt(finalValue);
            
            let current = 0;
            const increment = numericValue / 50; // 50 steps
            
            const counter = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    stat.textContent = finalValue;
                    clearInterval(counter);
                } else {
                    stat.textContent = Math.floor(current) + (isPercent ? '%' : '+');
                }
            }, 30);
        });
        
        animated = true;
    }
};

window.addEventListener('scroll', animateStats);
window.addEventListener('load', animateStats);

// ==========================================
// CONTACT CARD CLICK TO COPY (Optional Enhancement)
// ==========================================
const contactCards = document.querySelectorAll('.contact-card');

contactCards.forEach(card => {
    const link = card.querySelector('a');
    if (link) {
        // Add subtle pulse effect on hover
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }
});

// ==========================================
// LOADING ANIMATION
// ==========================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ==========================================
// SMOOTH HOVER EFFECTS FOR SERVICE CARDS
// ==========================================
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        // Add slight rotation on hover for dynamic effect
        this.style.transform = 'translateY(-10px) rotate(1deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// ==========================================
// ACTIVE NAV LINK HIGHLIGHTING
// ==========================================
const sections = document.querySelectorAll('section[id]');

const highlightNav = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('nav a').forEach(link => {
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
// KEYBOARD NAVIGATION
// ==========================================
document.addEventListener('keydown', (e) => {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// ==========================================
// PREVENT CONTEXT MENU ON IMAGES (Optional)
// ==========================================
const allImages = document.querySelectorAll('img');

allImages.forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        // Uncomment the line below to prevent right-click on images
        // e.preventDefault();
    });
});

// ==========================================
// CONSOLE MESSAGE (Easter Egg)
// ==========================================
console.log('%c📸 Capture by HS - Photography by Sim', 'font-size: 20px; font-weight: bold; color: #c9a86a;');
console.log('%cLooking for something? Contact me at info@capturebyhs.ca', 'font-size: 14px; color: #a8a8a8;');

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

// Apply debounce to scroll-heavy functions
const debouncedReveal = debounce(revealOnScroll, 10);
const debouncedHighlight = debounce(highlightNav, 10);

window.removeEventListener('scroll', revealOnScroll);
window.removeEventListener('scroll', highlightNav);
window.addEventListener('scroll', debouncedReveal);
window.addEventListener('scroll', debouncedHighlight);

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
    const img = new Image();
    img.src = src;
});

// ==========================================
// READY MESSAGE
// ==========================================
console.log('%c✅ Website loaded successfully!', 'font-size: 14px; color: #4CAF50;');
