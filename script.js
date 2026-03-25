document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-link');
    const body = document.body;

    const toggleMenu = () => {
        navLinks.classList.toggle('nav-active');
        // Change icon between bars and times
        if (navLinks.classList.contains('nav-active')) {
            hamburger.innerHTML = '<i class="fas fa-times"></i>';
            body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            body.style.overflow = 'auto'; // allow scrolling
        }
    };

    hamburger.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                toggleMenu();
            }
        });
    });

    // --- Active Link Highlight & Navbar Shadow on Scroll ---
    const sections = document.querySelectorAll('section');
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        // Navbar styling on scroll
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
            navbar.style.padding = '5px 0'; // slight condense effect
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '0';
        }

        // Active Link based on scroll position
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            // Adjust offset to trigger slightly before the section reaches the exact top
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            let href = link.getAttribute('href');
            if (href) {
                if (href.includes(current)) {
                    link.classList.add('active');
                }
            }
        });
    });


    // --- Simple Form Simulation ---
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.querySelector('.submit-btn');
            const originalText = btn.innerHTML;
            
            // Loading state
            btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Sending...';
            btn.style.opacity = '0.8';
            btn.disabled = true;
            
            // Simulate network request
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-check"></i> Message Sent Successfully!';
                btn.style.backgroundColor = 'var(--secondary)'; // Emerald Green
                btn.style.borderColor = 'var(--secondary)';
                btn.style.color = '#fff';
                btn.style.opacity = '1';
                
                form.reset();
                
                // Reset button after 4 seconds
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    btn.style.backgroundColor = '';
                    btn.style.borderColor = '';
                }, 4000);
            }, 1800);
        });
    }

    // --- Experience Tabs Switching ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const jobPanels = document.querySelectorAll('.job-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            jobPanels.forEach(p => p.classList.remove('active'));
            
            btn.classList.add('active');
            const target = btn.getAttribute('data-target');
            const targetPanel = document.getElementById(target);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // --- Dynamic Background Animation (HAML equivalent) ---
    const triWrap = document.getElementById('tri-wrap');
    if (triWrap) {
        for (let i = 0; i < 200; i++) {
            const tri = document.createElement('div');
            tri.className = 'tri';
            triWrap.appendChild(tri);
        }
    }

});
