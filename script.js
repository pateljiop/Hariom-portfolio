// Loading screen
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: linear-gradient(135deg, #667eea, #764ba2);
        display: flex; align-items: center; justify-content: center;
        z-index: 9999; color: white; font-size: 2rem; font-family: 'Montserrat';
    `;
    loader.innerHTML = 'Loading Hariom\'s Portfolio...';
    document.body.appendChild(loader);
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }, 2000);
});

// Smooth scrolling for navbar links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll indicator functionality with keyboard support
const dots = document.querySelectorAll('.dot');
const sections = document.querySelectorAll('.section');

function updateActiveDot() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    dots.forEach(dot => {
        dot.classList.remove('active');
        if (dot.dataset.section === current) {
            dot.classList.add('active');
        }
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const target = document.getElementById(dot.dataset.section);
        target.scrollIntoView({ behavior: 'smooth' });
    });
    // Keyboard navigation
    dot.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            dot.click();
        }
    });
    dot.tabIndex = 0;
});

// Throttled scroll event
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateActiveDot, 10);
});

// Theme toggle with localStorage
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Typewriter effect for hero heading
const heroHeading = document.querySelector('#hero h1');
const text = heroHeading.textContent;
heroHeading.textContent = '';
let i = 0;
function typeWriter() {
    if (i < text.length) {
        heroHeading.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

// Hero animations with parallax and particles
gsap.from('#hero p', { opacity: 0, y: 50, duration: 1.5, delay: 2, ease: 'power2.out' });
gsap.from('.buttons', { opacity: 0, y: 50, duration: 1.5, delay: 2.5, ease: 'power2.out' });
gsap.to('.hero-bg', { yPercent: -50, ease: 'none', scrollTrigger: { trigger: '#hero', scrub: true } });

// Particle animation
const particlesContainer = document.querySelector('.particles');
for (let j = 0; j < 50; j++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute; width: 4px; height: 4px; background: rgba(255,255,255,0.5);
        border-radius: 50%; top: ${Math.random() * 100}%; left: ${Math.random() * 100}%;
        animation: particleFloat ${Math.random() * 10 + 10}s infinite linear;
    `;
    particlesContainer.appendChild(particle);
}

// Staggered section animations
gsap.utils.toArray('.section:not(#hero)').forEach((section, i) => {
    gsap.from(section.querySelector('.section-icon'), {
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
    gsap.from(section.querySelector('h2'), {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
    gsap.from(section.querySelectorAll('.card, .timeline-item, .skill-item, .hobby-item, .info-card'), {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Card hover animations with rotation
gsap.utils.toArray('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { rotationY: 10, scale: 1.05, duration: 0.3, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { rotationY: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
    });
});

// Mobile optimizations
if (window.innerWidth < 768) {
    gsap.set('.particles', { display: 'none' }); // Disable particles on mobile for performance
}
