// Project Data
const projectsData = {
    'web-development': [
        {
            title: "Homemade Treasure",
            description: "Full-stack e-commerce web application with modular viewer/uploader roles and real-time CRUD operations.",
            detailedDescription: "A comprehensive full-stack e-commerce web application designed to connect local artisans with customers. The platform features distinct user roles including viewers and uploaders, enabling seamless product management and customer interaction.",
            features: [
                "Modular architecture with separate viewer and uploader roles",
                "Real-time CRUD operations for product listings",
                "Advanced image handling and optimization",
                "Shopping cart functionality with persistent storage",
                "Product rating and review system",
                "Order management and tracking",
                "Hosted using Netlify"
            ],
            technologies: ["React.js", "Node.js", "Express.js", "Local Storage", "VSCode", "HTML/CSS"],
            links: {
                linkedin: "https://www.linkedin.com/posts/haresh-bharadwaj-r-566556229_webdevelopment-ecommerce-homemadeproducts-activity-7332062155262894080-N79g?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2TJ4BoYYKu_vTPlvJrxFLYD2KRVx3fgY",
                github: "https://github.com/hareshbharadwaj/Homemade_Marketplace_web",
                demo: "https://res.cloudinary.com/daajhlxgj/video/upload/v1752140275/homemade_1751969238298_iiyqku.mp4"
            },
            icon: "fas fa-shopping-cart"
        },
        {
            title: "Foodie - Food Delivery Platform",
            description: "Full-stack multi-user web application with user and admin modules, featuring cart management and payments.",
            detailedDescription: "A comprehensive food delivery web application developed during training at Corizo. The platform features separate user and admin interfaces, complete order management system, and advanced analytics dashboard.",
            features: [
                "Multi-user authentication system",
                "Separate user and admin dashboards",
                "Shopping cart with persistent storage",
                "Integrated payment gateway",
                "Real-time order tracking",
                "Comprehensive analytics and reporting"
            ],
            technologies: ["JavaScript", "Node.js", "Express.js", "MySQL", "HTML/CSS", "Bootstrap"],
            links: {
                linkedin: "https://www.linkedin.com/posts/haresh-bharadwaj-r-566556229_webdevelopment-firstproject-fullstackdevelopment-activity-7260217850185818112-Q0D5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2TJ4BoYYKu_vTPlvJrxFLYD2kRVx3fgy",
                github: "https://github.com/hareshbharadwaj/foodie-app",
                demo: "https://res.cloudinary.com/daajhlxgj/video/upload/v1752140271/foodie-major_project_1751968207216_mw3ibj.mp4"
            },
            icon: "fas fa-utensils"
        }
    ],
    'computer-vision': [
        {
            title: "Hand Detection System",
            description: "Real-time hand tracking application using OpenCV and MediaPipe for gesture recognition.",
            detailedDescription: "Advanced computer vision application that uses MediaPipe for real-time hand detection and tracking. The system can identify hand landmarks and gestures with high precision.",
            features: [
                "Real-time hand tracking with high precision",
                "Hand landmark detection",
                "Gesture recognition capabilities",
                "Smooth input processing and noise reduction",
                "Cross-platform compatibility"
            ],
            technologies: ["Python", "OpenCV", "MediaPipe", "NumPy"],
            links: {
                linkedin: "https://www.linkedin.com/posts/haresh-bharadwaj-r-566556229_computervision-opencv-mediapipe-activity-7332114830104961025-Hntg?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2TJ4BoYYKu_vTPlvJrxFLYD2kRVx3fgY",
                github: "https://github.com/hareshbharadwaj/CV_hand_detection",
                video: "https://res.cloudinary.com/daajhlxgj/video/upload/v1752140321/hand_ozzep2.mp4"
            },
            icon: "fas fa-hand-paper"
        },
        {
            title: "Screen Painter",
            description: "Virtual drawing application using hand gestures for precise gesture-based drawing with color selection.",
            detailedDescription: "An innovative drawing application that enables users to draw in the air using hand gestures. Features dynamic color selection and input smoothing for a natural drawing experience.",
            features: [
                "Gesture-based drawing interface",
                "Dynamic color selection system",
                "Input smoothing for natural drawing",
                "Real-time hand tracking",
                "Multiple drawing modes"
            ],
            technologies: ["Python", "OpenCV", "MediaPipe", "NumPy"],
            links: {
                linkedin: "https://www.linkedin.com/posts/haresh-bharadwaj-r-566556229_computervision-gesturerecognition-virtualdrawing-activity-7332274282397417474-Hub2?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2TJ4BoYYKu_vTPlvJrxFLYD2kRVx3fgY",
                github: "https://github.com/hareshbharadwaj/CV_painter",
                video: "https://res.cloudinary.com/daajhlxgj/video/upload/v1752140175/paint_auwt8s.mp4"
            },
            icon: "fas fa-paint-brush"
        },
        {
            title: "Snake Game with Hand Control",
            description: "Classic snake game with responsive directional control using tracked finger positions.",
            detailedDescription: "A modern take on the classic snake game that uses hand gesture recognition for game controls. Players can control the snake's movement using finger positions for an enhanced gaming experience.",
            features: [
                "Hand gesture-based game controls",
                "Real-time finger position tracking",
                "Responsive directional control",
                "Enhanced gameplay experience",
                "Smooth game mechanics"
            ],
            technologies: ["Python", "OpenCV", "MediaPipe", "Pygame"],
            links: {
                linkedin: "https://www.linkedin.com/posts/haresh-bharadwaj-r-566556229_hand-controlled-snake-game-with-opencv-activity-7336788164998479872-scKj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2TJ4BoYYKu_vTPlvJrxFLYD2kRVx3fgY",
                github: "https://github.com/hareshbharadwaj/CV_snake_game",
                video: "https://res.cloudinary.com/daajhlxgj/video/upload/v1752140255/snake_llrolb.mp4"
            },
            icon: "fas fa-gamepad"
        },
        {
            title: "Subway Surfers Hand Control",
            description: "Action-triggered gameplay through real-time gesture recognition for seamless in-game navigation.",
            detailedDescription: "A gesture-controlled clone of the popular Subway Surfers game. Uses real-time hand tracking to control character movements, providing an immersive gaming experience.",
            features: [
                "Real-time gesture recognition",
                "Action-triggered gameplay",
                "Seamless in-game navigation",
                "Hand tracking integration",
                "Smooth character controls"
            ],
            technologies: ["Python", "OpenCV", "MediaPipe", "Pygame"],
            links: {
                linkedin: "https://www.linkedin.com/posts/haresh-bharadwaj-r-566556229_computervision-opencv-mediapipe-activity-7339332599707811840-VYjy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2TJ4BoYYKu_vTPlvJrxFLYD2kRVx3fgY",
                github: "https://github.com/hareshbharadwaj/CV_Subway",
                video: "https://res.cloudinary.com/daajhlxgj/video/upload/v1752140371/subway_h8zcnw.mp4"
            },
            icon: "fas fa-running"
        }
    ],
    'machine-learning': [
        {
            title: "Orbital Collision Risk Prediction",
            description: "Auto-encoder based machine learning classifier to predict satellite-space debris collisions.",
            detailedDescription: "An advanced machine learning system developed for the Star Submit competition at SIMATS. The project uses auto-encoder based hybrid classification to predict potential satellite-space debris collisions, addressing the critical challenge of space debris management.",
            features: [
                "Auto-encoder based feature extraction",
                "Hybrid machine learning classification",
                "Unbalanced dataset handling techniques",
                "Real-time collision risk assessment",
                "Comprehensive data preprocessing pipeline",
                "Model performance optimization"
            ],
            methodology: [
                "Data collection from space tracking databases",
                "Feature engineering for orbital parameters",
                "Auto-encoder implementation for dimensionality reduction",
                "Hybrid classifier training and validation",
                "Performance evaluation and optimization"
            ],
            technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
            links: {
                linkedin: "https://www.linkedin.com/posts/haresh-bharadwaj-r-566556229_machinelearning-spacedebris-aerospaceai-activity-7340638750441357315-hYfh?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2TJ4BoYYKu_vTPlvJrxFLYD2kRVx3fgY",
                github: "",
                paper: ""
            },
            icon: "fas fa-satellite"
        }
    ],
    'mobile-development': [
        {
            title: "Healthcare Assistant App",
            description: "Comprehensive healthcare management application with core health monitoring features.",
            detailedDescription: "A healthcare assistant mobile application built with core health features and deployed as a capstone project. The app provides comprehensive health management tools for users.",
            features: [
                "Health metrics tracking",
                "Medication reminders",
                "Appointment scheduling",
                "Emergency contacts",
                "Health data visualization",
                "User-friendly interface"
            ],
            technologies: ["Java", "Android Studio", "SQLite", "Firebase", "Material Design"],
            links: {
                linkedin: "",
                github: "https://github.com/hareshbharadwaj/Healthcare_app/releases/tag/v2.0",
                playstore: ""
            },
            icon: "fas fa-heartbeat"
        },
        {
            title: "Intelligent Tic-Tac-Toe",
            description: "Classic game with rule-based AI implementation for challenging single-player gameplay.",
            detailedDescription: "A modern implementation of the classic Tic-Tac-Toe game featuring an intelligent AI opponent with rule-based decision making for challenging gameplay.",
            features: [
                "Rule-based AI opponent",
                "Multiple difficulty levels",
                "Game statistics tracking",
                "Smooth animations",
                "Score tracking system",
                "Single-player mode"
            ],
            technologies: ["Java", "Android Studio", "SQLite", "Material Design"],
            links: {
                linkedin: "",
                github: "https://github.com/hareshbharadwaj/tictactoe-android-app/releases/tag/v1.0",
                demo: ""
            },
            icon: "fas fa-th"
        },
        {
            title: "Urban Service Booking Platform",
            description: "Service booking application with dual user roles and Streamlit-based worker analytics.",
            detailedDescription: "A comprehensive urban service booking platform with user and admin roles, real-time booking capabilities, secure authentication, and advanced analytics dashboard.",
            features: [
                "User and admin role management",
                "Real-time service booking",
                "Secure authentication system",
                "Rating and review system",
                "Streamlit-based worker analytics",
                "Service provider management"
            ],
            technologies: ["Java", "Android Studio", "Firebase", "Streamlit", "Material Design"],
            links: {
                linkedin: "",
                github: "https://github.com/hareshbharadwaj/Urban_app/releases/tag/v2.0",
                demo: ""
            },
            icon: "fas fa-city"
        }
    ]
};

// Certificate data
const certificatesData = {
    oracle: {
        title: "Oracle SQL Specialist",
        description: "Oracle Database SQL Certified Specialist",
        image: "https://res.cloudinary.com/daajhlxgj/image/upload/v1752140121/oraclespl_1751968622048_sxztvf.png"
    },
    freecodecamp: {
        title: "FreeCodeCamp JavaScript Developer",
        description: "JavaScript Algorithms & Data Structures (Beta)",
        image: "https://res.cloudinary.com/daajhlxgj/image/upload/v1752140261/freejava_1751968636483_o895sw.png"
    },
    ibm: {
        title: "IBM SQL & Relational DB",
        description: "SQL and Relational Databases 101",
        image: "https://res.cloudinary.com/daajhlxgj/image/upload/v1752140261/ibmsql_1751968626175_iwjdtb.png"
    },
    cisco: {
        title: "CISCO Networking & Cybersecurity",
        description: "CCNA: Enterprise Networking, Security, and Automation",
        image: "https://res.cloudinary.com/daajhlxgj/image/upload/v1752140267/networking_1751968636486_mze3zd.png"
    },
    devtown: {
        title: "DevTown Campus Ambassador",
        description: "Leadership & Community",
        image: "https://res.cloudinary.com/daajhlxgj/image/upload/v1752140259/campuss_1751968636489_lfwysq.png"
    },
    swayam: {
        title: "SWAYAM Python Programming",
        description: "Programming in Python - 4 Credit Course",
        image: "https://res.cloudinary.com/daajhlxgj/image/upload/v1752140116/python_1751968636488_o8qrpv.png"
    }
};

// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const projectsContainer = document.getElementById('projects-container');
const categoryCards = document.querySelectorAll('.category-card');
const viewCredentialsBtn = document.getElementById('view-credentials');
const contactForm = document.getElementById('contact-form');

// Background Animation
function initBackgroundAnimation() {
    const canvas = document.getElementById('background-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 100;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
            ctx.fill();
        });
        
        // Connect nearby particles
        particles.forEach((particle, i) => {
            particles.slice(i + 1).forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(otherParticle.x, otherParticle.y);
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - distance / 100)})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Navigation functionality
function initNavigation() {
    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active navigation link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;
            if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Projects functionality
function initProjects() {
    let activeCategory = null;
    
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            
            if (activeCategory === category) {
                // Close if same category clicked
                card.classList.remove('active');
                projectsContainer.classList.remove('show');
                activeCategory = null;
            } else {
                // Remove active from all cards
                categoryCards.forEach(c => c.classList.remove('active'));
                
                // Add active to clicked card
                card.classList.add('active');
                
                // Load projects for this category
                loadProjects(category);
                projectsContainer.classList.add('show');
                activeCategory = category;
            }
        });
    });
}

function loadProjects(category) {
    const projects = projectsData[category] || [];
    
    projectsContainer.innerHTML = projects.map(project => `
        <div class="project-card" onclick="openProjectModal('${category}', '${project.title}')">
            <div class="project-image">
                ${project.links.video ? 
                    `<video autoplay muted loop>
                        <source src="${project.links.video}" type="video/mp4">
                    </video>` :
                    `<i class="${project.icon}"></i>`
                }
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-tags">
                    ${project.technologies.slice(0, 3).map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                    ${project.technologies.length > 3 ? 
                        `<span class="tech-tag">+${project.technologies.length - 3} more</span>` : ''
                    }
                </div>
                <div class="project-footer">
                    <span class="view-details">Click to view details</span>
                    <i class="fas fa-arrow-right arrow-icon"></i>
                </div>
            </div>
        </div>
    `).join('');
}

function openProjectModal(category, title) {
    const project = projectsData[category].find(p => p.title === title);
    if (!project) return;
    
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <p class="project-description">${project.detailedDescription}</p>
        
        ${project.features ? `
            <h3>Key Features</h3>
            <ul class="feature-list">
                ${project.features.map(feature => `<li><i class="fas fa-check-circle"></i> ${feature}</li>`).join('')}
            </ul>
        ` : ''}
        
        ${project.methodology ? `
            <h3>Methodology</h3>
            <ul class="feature-list">
                ${project.methodology.map(method => `<li><i class="fas fa-cog"></i> ${method}</li>`).join('')}
            </ul>
        ` : ''}
        
        <h3>Technologies Used</h3>
        <div class="tech-tags">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        
        ${project.links.video && category === 'computer-vision' ? `
            <h3>Project Demo</h3>
            <div class="video-container">
                <video controls style="width: 100%; max-height: 400px; border-radius: 0.5rem;">
                    <source src="${project.links.video}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        ` : ''}
        
        <h3>Project Links</h3>
        <div class="project-links">
            ${category === 'machine-learning' ? `
                <div class="link-card">
                    <h4>LinkedIn Post</h4>
                    ${project.links.linkedin ? 
                        `<a href="${project.links.linkedin}" target="_blank" class="btn-primary">
                            <i class="fab fa-linkedin"></i> View Research Post
                        </a>` :
                        `<p>Research post coming soon</p>`
                    }
                </div>
            ` : category === 'mobile-development' ? `
                <div class="link-card">
                    <h4>Download App</h4>
                    ${project.links.github ? 
                        `<a href="${project.links.github}" target="_blank" class="btn-primary">
                            <i class="fab fa-github"></i> Download APK
                        </a>` :
                        `<p>Download link coming soon</p>`
                    }
                </div>
            ` : `
                <div class="links-grid">
                    <div class="link-card">
                        <h4>LinkedIn Post</h4>
                        ${project.links.linkedin ? 
                            `<a href="${project.links.linkedin}" target="_blank" class="btn-secondary">
                                <i class="fab fa-linkedin"></i> View Post
                            </a>` :
                            `<p>Link to be added soon</p>`
                        }
                    </div>
                    <div class="link-card">
                        <h4>GitHub Repo</h4>
                        ${project.links.github ? 
                            `<a href="${project.links.github}" target="_blank" class="btn-secondary">
                                <i class="fab fa-github"></i> View Code
                            </a>` :
                            `<p>Repository link coming soon</p>`
                        }
                    </div>
                    <div class="link-card">
                        <h4>${category === 'computer-vision' ? 'Video Demo' : 'Live Demo'}</h4>
                        ${project.links.demo || project.links.video ? 
                            `<a href="${project.links.demo || project.links.video}" target="_blank" class="btn-secondary">
                                <i class="fas fa-external-link-alt"></i> ${category === 'computer-vision' ? 'Watch Demo' : 'View Demo'}
                            </a>` :
                            `<p>${category === 'computer-vision' ? 'Video demo coming soon' : 'Demo link coming soon'}</p>`
                        }
                    </div>
                </div>
            `}
        </div>
    `;
    
    modal.style.display = 'block';
}

// Modal functionality
function initModals() {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');
    
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        });
    });
    
    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
}

// Credentials functionality
function initCredentials() {
    viewCredentialsBtn.addEventListener('click', () => {
        const modal = document.getElementById('credentials-modal');
        modal.style.display = 'block';
    });
    
    // Certificate cards
    document.querySelectorAll('.cert-card').forEach(card => {
        card.addEventListener('click', () => {
            const certKey = card.dataset.cert;
            const cert = certificatesData[certKey];
            
            if (cert) {
                const modal = document.getElementById('cert-modal');
                const modalBody = document.getElementById('cert-modal-body');
                
                modalBody.innerHTML = `
                    <h2>${cert.title}</h2>
                    <p>${cert.description}</p>
                    <div class="cert-image">
                        <img src="${cert.image}" alt="${cert.title}" style="width: 100%; max-width: 600px; border-radius: 0.5rem; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);">
                    </div>
                `;
                
                modal.style.display = 'block';
            }
        });
    });
}

// Contact form functionality
function initContactForm() {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            // Show success message
            alert('Message sent successfully! Thank you for your message. I\'ll get back to you soon.');
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1000);
    });
}

// Scroll animations
function initScrollAnimations() {
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
    
    // Add animation classes to elements
    document.querySelectorAll('.skill-card, .project-card, .cert-card, .timeline-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    document.querySelectorAll('.about-description, .contact-info').forEach(el => {
        el.classList.add('slide-left');
        observer.observe(el);
    });
    
    document.querySelectorAll('.contact-form, .education-card').forEach(el => {
        el.classList.add('slide-right');
        observer.observe(el);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initBackgroundAnimation();
    initNavigation();
    initProjects();
    initModals();
    initCredentials();
    initContactForm();
    initScrollAnimations();
});

// Add some additional CSS for modal content
const additionalStyles = `
    .project-description {
        color: var(--text-gray);
        font-size: 1.125rem;
        line-height: 1.7;
        margin-bottom: 2rem;
    }
    
    .feature-list {
        list-style: none;
        margin-bottom: 2rem;
    }
    
    .feature-list li {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        margin-bottom: 0.75rem;
        color: var(--text-gray);
    }
    
    .feature-list i {
        color: var(--success-color);
        margin-top: 0.25rem;
        flex-shrink: 0;
    }
    
    .project-links {
        margin-top: 2rem;
    }
    
    .links-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
    }
    
    .link-card {
        background: rgba(51, 65, 85, 0.3);
        padding: 1.5rem;
        border-radius: 0.75rem;
        border: 1px solid var(--border-color);
        text-align: center;
    }
    
    .link-card h4 {
        color: var(--primary-color);
        font-weight: 600;
        margin-bottom: 1rem;
    }
    
    .link-card p {
        color: var(--text-gray);
        font-size: 0.875rem;
    }
    
    .video-container {
        margin: 1.5rem 0;
        background: rgba(51, 65, 85, 0.3);
        padding: 1rem;
        border-radius: 0.75rem;
        border: 1px solid var(--border-color);
    }
    
    .cert-image {
        text-align: center;
        margin-top: 2rem;
    }
`;

// Add the additional styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);