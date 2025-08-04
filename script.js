// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Mobile dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        
        link.addEventListener('click', function(e) {
            // Only toggle on mobile
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
                
                // Close other dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });
            }
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Modal functionality
function showModal(type, title) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    let content = '';
    
    switch(type) {
        case 'adopt':
            content = `
                <h2>Adopt ${title}</h2>
                <p>Thank you for your interest in adopting ${title}!</p>
                <form id="adoptionForm">
                    <div class="form-group">
                        <label for="adopter-name">Your Name:</label>
                        <input type="text" id="adopter-name" required>
                    </div>
                    <div class="form-group">
                        <label for="adopter-email">Email:</label>
                        <input type="email" id="adopter-email" required>
                    </div>
                    <div class="form-group">
                        <label for="adopter-phone">Phone:</label>
                        <input type="tel" id="adopter-phone" required>
                    </div>
                    <div class="form-group">
                        <label for="adoption-reason">Why do you want to adopt this dog?</label>
                        <textarea id="adoption-reason" rows="4" required></textarea>
                    </div>
                    <button type="submit" class="submit-button">Submit Application</button>
                </form>
            `;
            break;
            
        case 'service':
            content = `
                <h2>Book ${title}</h2>
                <p>Schedule your ${title.toLowerCase()} appointment.</p>
                <form id="serviceForm">
                    <div class="form-group">
                        <label for="service-name">Your Name:</label>
                        <input type="text" id="service-name" required>
                    </div>
                    <div class="form-group">
                        <label for="service-email">Email:</label>
                        <input type="email" id="service-email" required>
                    </div>
                    <div class="form-group">
                        <label for="service-date">Preferred Date:</label>
                        <input type="date" id="service-date" required>
                    </div>
                    <div class="form-group">
                        <label for="service-time">Preferred Time:</label>
                        <select id="service-time" required>
                            <option value="">Select time</option>
                            <option value="09:00">9:00 AM</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="15:00">3:00 PM</option>
                            <option value="16:00">4:00 PM</option>
                        </select>
                    </div>
                    <button type="submit" class="submit-button">Book Appointment</button>
                </form>
            `;
            break;
            
        case 'emergency':
            content = `
                <h2>Emergency Veterinary Care</h2>
                <p><strong>Emergency Hotline:</strong> 1-800-PAWS-VET</p>
                <p>Our emergency team is available 24/7. Please call immediately if your dog needs urgent care.</p>
                <div class="emergency-actions">
                    <button onclick="window.location.href='tel:1-800-PAWS-VET'" class="emergency-button">Call Now</button>
                    <button onclick="closeModal()" class="submit-button">Close</button>
                </div>
            `;
            break;
            
        case 'donate':
            content = `
                <h2>Donate to ${title}</h2>
                <p>Your donation helps us rescue and care for more animals in need.</p>
                <form id="donationForm">
                    <div class="form-group">
                        <label for="donor-name">Your Name:</label>
                        <input type="text" id="donor-name" required>
                    </div>
                    <div class="form-group">
                        <label for="donor-email">Email:</label>
                        <input type="email" id="donor-email" required>
                    </div>
                    <div class="form-group">
                        <label for="donation-amount">Donation Amount ($):</label>
                        <input type="number" id="donation-amount" min="5" step="5" required>
                    </div>
                    <button type="submit" class="submit-button">Donate Now</button>
                </form>
            `;
            break;
            
        case 'volunteer':
            content = `
                <h2>Volunteer with ${title}</h2>
                <p>Join our team of dedicated volunteers and make a difference in animals' lives.</p>
                <form id="volunteerForm">
                    <div class="form-group">
                        <label for="volunteer-name">Your Name:</label>
                        <input type="text" id="volunteer-name" required>
                    </div>
                    <div class="form-group">
                        <label for="volunteer-email">Email:</label>
                        <input type="email" id="volunteer-email" required>
                    </div>
                    <div class="form-group">
                        <label for="volunteer-phone">Phone:</label>
                        <input type="tel" id="volunteer-phone" required>
                    </div>
                    <div class="form-group">
                        <label for="volunteer-availability">Availability:</label>
                        <select id="volunteer-availability" required>
                            <option value="">Select availability</option>
                            <option value="weekdays">Weekdays</option>
                            <option value="weekends">Weekends</option>
                            <option value="both">Both</option>
                        </select>
                    </div>
                    <button type="submit" class="submit-button">Apply to Volunteer</button>
                </form>
            `;
            break;
            
        case 'book':
            content = `
                <h2>${title}</h2>
                <p>Learn more about this valuable resource for dog owners.</p>
                <div class="book-details">
                    <p><strong>Author:</strong> Expert Dog Trainer</p>
                    <p><strong>Pages:</strong> 250</p>
                    <p><strong>Price:</strong> $24.99</p>
                    <p><strong>Available:</strong> Paperback, eBook, Audiobook</p>
                </div>
                <button onclick="closeModal()" class="submit-button">Close</button>
            `;
            break;
            
        case 'hotel':
            content = `
                <h2>Book ${title}</h2>
                <p>Reserve your dog's stay at ${title}.</p>
                <form id="hotelForm">
                    <div class="form-group">
                        <label for="hotel-name">Your Name:</label>
                        <input type="text" id="hotel-name" required>
                    </div>
                    <div class="form-group">
                        <label for="hotel-email">Email:</label>
                        <input type="email" id="hotel-email" required>
                    </div>
                    <div class="form-group">
                        <label for="hotel-checkin">Check-in Date:</label>
                        <input type="date" id="hotel-checkin" required>
                    </div>
                    <div class="form-group">
                        <label for="hotel-checkout">Check-out Date:</label>
                        <input type="date" id="hotel-checkout" required>
                    </div>
                    <div class="form-group">
                        <label for="hotel-dog-name">Dog's Name:</label>
                        <input type="text" id="hotel-dog-name" required>
                    </div>
                    <button type="submit" class="submit-button">Book Stay</button>
                </form>
            `;
            break;
    }
    
    modalBody.innerHTML = content;
    modal.style.display = 'block';
    
    // Add form submission handlers
    setTimeout(() => {
        const form = modalBody.querySelector('form');
        if (form) {
            form.addEventListener('submit', handleFormSubmission);
        }
    }, 100);
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Q&A Toggle functionality
function toggleQA(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('i');
    
    answer.classList.toggle('active');
    
    if (answer.classList.contains('active')) {
        icon.style.transform = 'rotate(180deg)';
    } else {
        icon.style.transform = 'rotate(0deg)';
    }
}

// Lightbox functionality
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    const img = element.querySelector('img');
    const caption = element.querySelector('.post-caption p').textContent;
    const author = element.querySelector('.post-author').textContent;
    
    lightboxImg.src = img.src;
    lightboxCaption.innerHTML = `${caption}<br>${author}`;
    lightbox.style.display = 'block';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Close lightbox when clicking outside
window.addEventListener('click', (event) => {
    const lightbox = document.getElementById('lightbox');
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Breed information
const breedInfo = {
    'golden': {
        name: 'Golden Retriever',
        temperament: 'Friendly, intelligent, devoted',
        lifespan: '10-12 years',
        size: 'Large',
        exercise: 'High energy, needs daily exercise',
        grooming: 'Regular brushing required'
    },
    'labrador': {
        name: 'Labrador Retriever',
        temperament: 'Outgoing, even-tempered, intelligent',
        lifespan: '10-12 years',
        size: 'Large',
        exercise: 'Very active, loves swimming',
        grooming: 'Moderate shedding, regular brushing'
    },
    'german-shepherd': {
        name: 'German Shepherd',
        temperament: 'Loyal, confident, courageous',
        lifespan: '7-10 years',
        size: 'Large',
        exercise: 'High energy, needs mental stimulation',
        grooming: 'Heavy shedding, regular grooming'
    },
    'poodle': {
        name: 'Poodle',
        temperament: 'Intelligent, active, alert',
        lifespan: '12-15 years',
        size: 'Medium',
        exercise: 'Moderate energy, enjoys activities',
        grooming: 'High maintenance, regular clipping'
    },
    'bulldog': {
        name: 'Bulldog',
        temperament: 'Calm, courageous, friendly',
        lifespan: '8-10 years',
        size: 'Medium',
        exercise: 'Low energy, short walks',
        grooming: 'Minimal grooming required'
    }
};

function showBreedInfo() {
    const select = document.getElementById('breedSelect');
    const infoDiv = document.getElementById('breedInfo');
    
    if (select.value && breedInfo[select.value]) {
        const breed = breedInfo[select.value];
        infoDiv.innerHTML = `
            <h4>${breed.name}</h4>
            <p><strong>Temperament:</strong> ${breed.temperament}</p>
            <p><strong>Lifespan:</strong> ${breed.lifespan}</p>
            <p><strong>Size:</strong> ${breed.size}</p>
            <p><strong>Exercise:</strong> ${breed.exercise}</p>
            <p><strong>Grooming:</strong> ${breed.grooming}</p>
        `;
        infoDiv.style.display = 'block';
    } else {
        infoDiv.style.display = 'none';
    }
}

// Insurance recommendations
function getInsuranceRecommendation() {
    const age = document.getElementById('dogAge').value;
    const budget = document.getElementById('insuranceBudget').value;
    const resultDiv = document.getElementById('insuranceResult');
    
    if (!age || !budget) {
        alert('Please select both age and budget options.');
        return;
    }
    
    let recommendation = '';
    
    if (age === 'puppy' && budget === 'basic') {
        recommendation = 'We recommend our Puppy Starter Plan at $25/month with basic coverage for vaccinations and wellness visits.';
    } else if (age === 'puppy' && budget === 'standard') {
        recommendation = 'We recommend our Puppy Plus Plan at $45/month with comprehensive coverage including accidents and illnesses.';
    } else if (age === 'puppy' && budget === 'premium') {
        recommendation = 'We recommend our Puppy Premium Plan at $75/month with full coverage including dental care and alternative therapies.';
    } else if (age === 'young' && budget === 'basic') {
        recommendation = 'We recommend our Young Adult Basic Plan at $30/month with essential coverage for your active dog.';
    } else if (age === 'young' && budget === 'standard') {
        recommendation = 'We recommend our Young Adult Standard Plan at $50/month with comprehensive accident and illness coverage.';
    } else if (age === 'young' && budget === 'premium') {
        recommendation = 'We recommend our Young Adult Premium Plan at $80/month with full coverage including behavioral therapy.';
    } else if (age === 'adult' && budget === 'basic') {
        recommendation = 'We recommend our Adult Basic Plan at $35/month with essential health coverage.';
    } else if (age === 'adult' && budget === 'standard') {
        recommendation = 'We recommend our Adult Standard Plan at $55/month with comprehensive coverage for adult dogs.';
    } else if (age === 'adult' && budget === 'premium') {
        recommendation = 'We recommend our Adult Premium Plan at $85/month with full coverage including chronic conditions.';
    } else if (age === 'senior' && budget === 'basic') {
        recommendation = 'We recommend our Senior Basic Plan at $40/month with essential coverage for older dogs.';
    } else if (age === 'senior' && budget === 'standard') {
        recommendation = 'We recommend our Senior Standard Plan at $60/month with comprehensive coverage including arthritis care.';
    } else if (age === 'senior' && budget === 'premium') {
        recommendation = 'We recommend our Senior Premium Plan at $90/month with full coverage including cancer treatment.';
    }
    
    resultDiv.innerHTML = `<p><strong>Recommendation:</strong> ${recommendation}</p>`;
    resultDiv.style.display = 'block';
}

// Form submission handler
function handleFormSubmission(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const formType = event.target.id;
    
    // Simulate form submission
    alert('Thank you for your submission! We will contact you soon.');
    closeModal();
    
    // Reset form
    event.target.reset();
}

// Cross-breeding form submission
document.getElementById('crossbreedingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const dog1Breed = document.getElementById('dog1-breed').value;
    const dog1Age = document.getElementById('dog1-age').value;
    const dog2Breed = document.getElementById('dog2-breed').value;
    const dog2Age = document.getElementById('dog2-age').value;
    const email = document.getElementById('contact-email').value;
    
    alert(`Thank you for your cross-breeding consultation request!\n\nDog 1: ${dog1Breed} (${dog1Age} years)\nDog 2: ${dog2Breed} (${dog2Age} years)\n\nWe will contact you at ${email} within 24 hours.`);
    
    this.reset();
});

// Review form submission
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('reviewer-name').value;
    const rating = document.getElementById('review-rating').value;
    const review = document.getElementById('review-text').value;
    
    alert(`Thank you for your review, ${name}!\n\nRating: ${rating} stars\nReview: ${review}\n\nYour review has been submitted successfully.`);
    
    this.reset();
});

// Newsletter form submission
document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing to our newsletter!\n\nWe'll send updates to: ${email}`);
    
    this.reset();
});

// Set minimum date for hotel bookings (today)
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    const checkinInput = document.getElementById('hotel-checkin');
    const checkoutInput = document.getElementById('hotel-checkout');
    
    if (checkinInput) {
        checkinInput.min = today;
    }
    if (checkoutInput) {
        checkoutInput.min = today;
    }
});

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(200, 230, 201, 0.95)';
    } else {
        navbar.style.backgroundColor = '#C8E6C9';
    }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // Check if image is already loaded
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            // Add load event listener
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
            
            // Add error event listener for fallback
            img.addEventListener('error', function() {
                this.style.opacity = '1';
                console.warn('Image failed to load:', this.src);
            });
        }
    });
});

// Add hover effects for cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.dog-card, .service-card, .book-card, .hotel-card, .ngo-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// Add real-time validation
document.addEventListener('DOMContentLoaded', function() {
    const emailInputs = document.querySelectorAll('input[type="email"]');
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    emailInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && !validateEmail(this.value)) {
                this.style.borderColor = '#e74c3c';
                this.setCustomValidity('Please enter a valid email address');
            } else {
                this.style.borderColor = '#C8E6C9';
                this.setCustomValidity('');
            }
        });
    });
    
    phoneInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && !validatePhone(this.value)) {
                this.style.borderColor = '#e74c3c';
                this.setCustomValidity('Please enter a valid phone number');
            } else {
                this.style.borderColor = '#C8E6C9';
                this.setCustomValidity('');
            }
        });
    });
}); 