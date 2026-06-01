// Smooth scroll functionality
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Navigation active link
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Filter vehicles
const filterButtons = document.querySelectorAll('.filter-btn');
const vehicleCards = document.querySelectorAll('.vehicle-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter vehicles
        const filterValue = button.getAttribute('data-filter');
        vehicleCards.forEach(card => {
            if (filterValue === 'all') {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.animation = 'slideUp 0.5s ease';
                }, 10);
            } else {
                if (card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.animation = 'slideUp 0.5s ease';
                    }, 10);
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});

// Modal functionality
const modal = document.getElementById('vehicleModal');
const closeBtn = document.querySelector('.close');

function openModal(vehicleId) {
    const vehicleData = {
        'vehicle-1': {
            title: 'Mercedes-Benz S-Class',
            description: 'Experience ultimate luxury and performance with the iconic Mercedes-Benz S-Class. Premium leather interior, advanced AI assistance, and cutting-edge safety features. Perfect for those who demand the best.'
        },
        'vehicle-2': {
            title: 'BMW X7',
            description: 'The ultimate luxury SUV. Spacious seven-seater layout, powerful engine options, and sophisticated technology. Ideal for families who value comfort and performance.'
        },
        'vehicle-3': {
            title: 'Porsche 911 Turbo',
            description: 'Pure driving exhilaration. With 580 HP, 0-100 km/h in just 2.7 seconds. State-of-the-art aerodynamics and precision engineering for the ultimate sports car experience.'
        },
        'vehicle-4': {
            title: 'Audi A8 L',
            description: 'Innovation meets elegance. Advanced Quattro AWD system, digital cockpit technology, and executive comfort features. A masterpiece of German engineering.'
        },
        'vehicle-5': {
            title: 'Range Rover Vogue',
            description: 'Adventure-ready luxury. Capable on any terrain with refined on-road manners. Premium cabin, advanced infotainment, and commanding presence.'
        },
        'vehicle-6': {
            title: 'Ferrari F8 Tributo',
            description: 'Italian passion meets German precision. Twin-turbocharged V12 engine delivering 720 horsepower. Exclusive design and extraordinary performance.'
        }
    };

    const data = vehicleData[vehicleId];
    if (data) {
        document.getElementById('modalTitle').textContent = data.title;
        document.getElementById('modalDescription').textContent = data.description;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Form submission
function handleFormSubmit(event) {
    event.preventDefault();
    alert('Thank you for your message! We will contact you shortly.');
    event.target.reset();
}

// Test drive button
function handleTestDrive() {
    const phoneNumber = prompt('Please enter your phone number for test drive booking:');
    if (phoneNumber) {
        alert(`Test drive scheduled! We will contact you at ${phoneNumber}.`);
        closeModal();
    }
}

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.flexDirection = 'column';
        navMenu.style.backgroundColor = 'var(--dark-color)';
        navMenu.style.padding = '20px';
        navMenu.style.gap = '0';
    });
}

// Smooth animations on load
window.addEventListener('load', () => {
    vehicleCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});