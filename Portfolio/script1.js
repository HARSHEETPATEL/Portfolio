      // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Update active nav link
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        });

        // Highlight active section in navigation
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 200) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        });

        // Typing animation
        const typingText = document.getElementById('typing-text');
        const texts = ['Frontend Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Creative Coder'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeText() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }

            setTimeout(typeText, typeSpeed);
        }

        // Start typing animation after page load
        window.addEventListener('load', () => {
            setTimeout(typeText, 1000);
        });

        // Mouse trail effect
        let mouseTrails = [];
        document.addEventListener('mousemove', function(e) {
            const trail = document.createElement('div');
            trail.className = 'mouse-trail';
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            document.body.appendChild(trail);
            
            mouseTrails.push(trail);
            
            if (mouseTrails.length > 10) {
                const oldTrail = mouseTrails.shift();
                oldTrail.remove();
            }
            
            setTimeout(() => {
                trail.remove();
                mouseTrails = mouseTrails.filter(t => t !== trail);
            }, 1000);
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('.section-enter').forEach(section => {
            observer.observe(section);
        });

        // Form submission with enhanced UX
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const form = e.target;
            const formData = new FormData(form);
            const formMessage = document.getElementById('formMessage');
            const submitButton = form.querySelector('button[type="submit"]');
            
            // Show loading state
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = `
                <span class="flex items-center justify-center">
                    <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                </span>
            `;
            submitButton.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                formMessage.className = 'mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300 animate-fade-in';
                formMessage.innerHTML = `
                    <div class="flex items-center">
                        <i class="fas fa-check-circle mr-3 text-green-400"></i>
                        <div>
                            <div class="font-semibold">Message sent successfully!</div>
                            <div class="text-sm text-green-400">I'll get back to you within 24 hours.</div>
                        </div>
                    </div>
                `;
                formMessage.classList.remove('hidden');
                
                // Reset form and button
                form.reset();
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
                
                // Add success animation to form
                form.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    form.style.transform = 'scale(1)';
                }, 200);
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.opacity = '0';
                    formMessage.style.transform = 'translateY(-10px)';
                    setTimeout(() => {
                        formMessage.classList.add('hidden');
                        formMessage.style.opacity = '1';
                        formMessage.style.transform = 'translateY(0)';
                    }, 300);
                }, 5000);
            }, 2000);
        });

        // Enhanced floating label effect
        document.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
            
            // Check for pre-filled values
            if (input.value) {
                input.parentElement.classList.add('focused');
            }
        });

        // Parallax effect for background blobs
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const blobs = document.querySelectorAll('.blob');
            
            blobs.forEach((blob, index) => {
                const speed = 0.5 + (index * 0.2);
                const yPos = -(scrolled * speed);
                blob.style.transform = `translate3d(0, ${yPos}px, 0)`;
            });
        });

        // Add glow effect to elements on hover
        document.querySelectorAll('.card-hover').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 0 30px rgba(102, 126, 234, 0.3)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.boxShadow = '';
            });
        });

        // Navbar background opacity on scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            const scrolled = window.pageYOffset;
            
            if (scrolled > 50) {
                nav.style.background = 'rgba(15, 15, 35, 0.95)';
                nav.style.backdropFilter = 'blur(20px)';
            } else {
                nav.style.background = 'rgba(255, 255, 255, 0.1)';
                nav.style.backdropFilter = 'blur(10px)';
            }
        });

        // Add particle effect (optional enhancement)
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'fixed w-1 h-1 bg-primary/30 rounded-full pointer-events-none';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = window.innerHeight + 'px';
            particle.style.animation = `float ${3 + Math.random() * 4}s linear forwards`;
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 7000);
        }

        // Create particles periodically
        setInterval(createParticle, 3000);

        // Add custom cursor effect
        const cursor = document.createElement('div');
        cursor.className = 'fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference';
        cursor.style.background = 'radial-gradient(circle, rgba(102,126,234,0.8) 0%, transparent 70%)';
        cursor.style.borderRadius = '50%';
        cursor.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Enhanced scroll animations
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.card-hover, .skill-badge, .glass-effect');
            
            elements.forEach((element, index) => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        };

        // Initial setup for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const elements = document.querySelectorAll('.card-hover, .skill-badge, .glass-effect');
            elements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            });
        });

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);

        // Performance optimization: throttle scroll events
        let ticking = false;
        function updateOnScroll() {
            // Any scroll-based animations go here
            if (!ticking) {
                requestAnimationFrame(() => {
                    // Scroll animations
                    ticking = false;
                });
                ticking = true;
            }
        }

        window.addEventListener('scroll', updateOnScroll);