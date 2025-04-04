// DOM Elements
const header = document.querySelector('header');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    
    // Create mobile nav if it doesn't exist
    if (!document.querySelector('.mobile-nav')) {
        const mobileNav = document.createElement('div');
        mobileNav.classList.add('mobile-nav');
        
        // Clone nav links
        const navLinksClone = navLinks.cloneNode(true);
        mobileNav.appendChild(navLinksClone);
        
        // Add mobile nav to DOM
        document.body.appendChild(mobileNav);
        
        // Add event listeners to mobile nav links
        const mobileNavLinks = mobileNav.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }
    
    // Toggle mobile nav
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('active');
    
    // Prevent body scroll when mobile nav is active
    document.body.classList.toggle('no-scroll');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        const yOffset = -80; // Header height offset
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    });
});

// Animated elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .about-content, .about-image, .download-content, .download-option');
    
    elements.forEach(element => {
        // Add animate class when element comes into view
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
}

// Initial call and scroll event
window.addEventListener('DOMContentLoaded', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Add CSS for the animations created by JS
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .feature-card, .about-content, .about-image, .download-content, .download-option {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .feature-card.animate, .about-content.animate, .about-image.animate, .download-content.animate, .download-option.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .mobile-menu-btn.active span:nth-child(1) {
            transform: translateY(10px) rotate(45deg);
        }
        
        .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-btn.active span:nth-child(3) {
            transform: translateY(-10px) rotate(-45deg);
        }
        
        .mobile-nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--darker);
            z-index: 99;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: translateX(-100%);
            transition: transform 0.4s ease;
        }
        
        .mobile-nav.active {
            transform: translateX(0);
        }
        
        .mobile-nav .nav-links {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            text-align: center;
        }
        
        .mobile-nav .nav-links a {
            font-size: 2.4rem;
        }
        
        body.no-scroll {
            overflow: hidden;
        }
        
        .comet {
            animation-delay: 2s;
        }
        
        @media (prefers-reduced-motion) {
            .feature-card, .about-content, .about-image, .download-content, .download-option {
                transition: none;
            }
        }
    `;
    document.head.appendChild(style);

    // Initialize animations for space elements
    initSpaceAnimations();
});

// Main JavaScript for Solar Browser Website

document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

function initializePage() {
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize space animations
    initSpaceAnimations();

    // Initialize scroll animations
    initScrollAnimations();
}

function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
}

function initSpaceAnimations() {
    // Get all containers that need stars
    const heroSection = document.querySelector('.hero');
    const aboutSection = document.querySelector('.about');
    const blogHeader = document.querySelector('.blog-header');
    const sponsorsHero = document.querySelector('.sponsors-hero');
    
    // Create stars in each section if it exists
    if (heroSection) {
        const starsContainer = heroSection.querySelector('.stars');
        if (starsContainer) {
            createStars(starsContainer);
        }
        
        // Create comets in hero section
        createComets(heroSection, 'white');
    }
    
    if (aboutSection) {
        const starsContainer = aboutSection.querySelector('.stars');
        if (starsContainer) {
            createStars(starsContainer, 100);
        }
    }
    
    if (blogHeader) {
        const spaceBackground = blogHeader.querySelector('.space-background');
        if (spaceBackground) {
            createStars(spaceBackground, 150);
            createComets(spaceBackground, 'white');
        }
    }

    if (sponsorsHero) {
        const spaceBackground = sponsorsHero.querySelector('.space-background');
        if (spaceBackground) {
            createStars(spaceBackground, 200);
            createComets(spaceBackground, 'yellow');
        }
    }
}

function createStars(container, numStars = 150) {
    if (!container) return;
    
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 3 + 1;
        
        // Random opacity
        const opacity = Math.random() * 0.8 + 0.2;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.opacity = opacity;
        
        container.appendChild(star);
    }
}

function createComets(container, color = 'white', numComets = 5) {
    if (!container) return;
    
    // Create initial comets
    for (let i = 0; i < numComets; i++) {
        createComet(container, color);
    }
    
    // Create new comets periodically
    setInterval(() => {
        createComet(container, color);
    }, 8000);
}

function createComet(container, color) {
    const comet = document.createElement('div');
    comet.classList.add('comet');
    
    // Random position
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    // Random size
    const size = Math.random() * 3 + 1;
    
    // Random angle and distance
    const angle = Math.random() * 360;
    const distance = 50 + Math.random() * 100;
    
    // Calculate end position based on angle and distance
    const rad = angle * (Math.PI / 180);
    const moveX = Math.cos(rad) * distance;
    const moveY = Math.sin(rad) * distance;
    
    // Set comet color
    if (color === 'yellow') {
        comet.classList.add('yellow-comet');
    }
    
    comet.style.left = `${x}%`;
    comet.style.top = `${y}%`;
    comet.style.width = `${size}px`;
    comet.style.height = `${size * 15}px`;
    comet.style.setProperty('--move-x', `${moveX}vw`);
    comet.style.setProperty('--move-y', `${moveY}vh`);
    
    container.appendChild(comet);
    
    // Remove comet after animation completes
    setTimeout(() => {
        comet.remove();
    }, 3000);
}

function initScrollAnimations() {
    // Animate elements when they come into view
    const animateElements = document.querySelectorAll('.feature-card, .about-content, .tier-card, .corporate-tier, .sponsor-logo, .faq-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
} 