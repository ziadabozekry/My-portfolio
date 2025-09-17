// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ✅ Form validation and EmailJS submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Status message element
        const statusMsg = document.createElement("p");
        statusMsg.style.display = "none";
        statusMsg.style.marginTop = "10px";
        contactForm.appendChild(statusMsg);

        // Init EmailJS
        emailjs.init("ytzdf5eEIF4tJBE8Q");

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (name === '' || email === '' || message === '') {
                statusMsg.style.display = "block";
                statusMsg.style.color = "red";
                statusMsg.textContent = "❌ Please fill in all fields.";
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                statusMsg.style.display = "block";
                statusMsg.style.color = "red";
                statusMsg.textContent = "❌ Please enter a valid email address.";
                return;
            }
            
            // Sending...
            statusMsg.style.display = "block";
            statusMsg.style.color = "#555";
            statusMsg.textContent = "⏳ Sending your message...";

            // Send with EmailJS
            emailjs.sendForm("service_9n5nhuk", "template_jnku50h", "#contactForm")
                .then(() => {
                    statusMsg.style.color = "green";
                    statusMsg.textContent = "✅ Thank you for your message! I’ll get back to you shortly.";
                    contactForm.reset();

                    setTimeout(() => {
                        statusMsg.style.display = "none";
                    }, 5000);
                }, (err) => {
                    console.error("EmailJS Error:", err);
                    statusMsg.style.color = "red";
                    statusMsg.textContent = "❌ Oops! Something went wrong. Please try again later.";
                });
        });
    }
    
    // Animate skill bars on scroll
    const skillSection = document.getElementById('skills');
    const skillLevels = document.querySelectorAll('.skill-level');
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    function animateSkillBars() {
        if (isInViewport(skillSection)) {
            skillLevels.forEach(skill => {
                skill.style.width = skill.style.width;
            });
            window.removeEventListener('scroll', animateSkillBars);
        }
    }
    
    window.addEventListener('scroll', animateSkillBars);
    animateSkillBars();
    
    // Animate project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    function animateProjectCards() {
        projectCards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('animate');
            }
        });
    }
    
    window.addEventListener('scroll', animateProjectCards);
    animateProjectCards();
    
    // Typing effect
    const headerText = document.querySelector('.header-text p');
    if (headerText) {
        const text = headerText.textContent;
        headerText.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                headerText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        setTimeout(typeWriter, 1000);
    }
    
    // Scroll-to-top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    document.body.appendChild(scrollTopBtn);
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    const style = document.createElement('style');
    style.textContent = `
        .scroll-top-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(90deg, #3498db, #2ecc71);
            color: white;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
        }
        
        .scroll-top-btn.show {
            opacity: 1;
            visibility: visible;
        }
        
        .scroll-top-btn:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
        }
        
        .project-card {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .project-card.animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});