// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Testimonials Slider (If needed)
const testimonialsContainer = document.querySelector('.testimonial-grid');
let currentTestimonial = 0;

function updateTestimonialsSlider() {
    testimonialsContainer.style.transform = `translateX(-${currentTestimonial * 100}%)`;
}

document.querySelector('.next-testimonial').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonialsContainer.children.length;
    updateTestimonialsSlider();
});

document.querySelector('.prev-testimonial').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonialsContainer.children.length) % testimonialsContainer.children.length;
    updateTestimonialsSlider();
});
