// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for navbar height
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add navbar background on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        }
    });
    
    // Add loading animation for project cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Typing effect for hero title (only animate 'Hi, I\'m ')
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const gradientSpan = heroTitle.querySelector('.gradient-text');
        const nameHTML = gradientSpan ? gradientSpan.outerHTML : '';
        const staticText = "Hi, I'm ";
        heroTitle.innerHTML = '';
        heroTitle.style.opacity = '1';
        let i = 0;
        function typeWriter() {
            if (i <= staticText.length) {
                heroTitle.innerHTML = staticText.slice(0, i) + nameHTML;
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        setTimeout(typeWriter, 500);
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        const rate = scrolled * -0.5;
        heroSection.style.transform = `translateY(${rate}px)`;
    }
});