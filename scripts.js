// Media URLs
const media = [
    'https://i.imgur.com/n35eIb2.jpeg',
    'https://i.imgur.com/lE4Esat.jpeg',
    'https://i.imgur.com/BtHqx2J.jpeg',
    'https://i.imgur.com/6Bbc3wy.jpeg',
    'https://i.imgur.com/hRXAHw1.jpeg',
    'https://i.imgur.com/Mb6M6Mi.jpeg',
    'https://i.imgur.com/4P5CFUF.jpeg',
    'https://i.imgur.com/uyMr6X3.jpeg',
    'https://i.imgur.com/bfJaep7.jpeg',
    'https://i.imgur.com/gJNN3pz.jpeg'
];

// Navigation
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Update active nav link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Update active section
        const targetSection = link.dataset.section;
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetSection) {
                section.classList.add('active');
            }
        });
    });
});

// Gallery
const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');

// Create gallery items
media.forEach((src) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Gallery image';
    img.loading = 'lazy';
    
    item.appendChild(img);
    gallery.appendChild(item);
    
    // Lightbox functionality
    item.addEventListener('click', () => {
        lightboxImage.src = src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close lightbox
const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
};

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// ESC key to close lightbox
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});
