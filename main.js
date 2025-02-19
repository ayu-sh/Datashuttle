const navLinks = document.querySelector('.nav-links')
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
  }

const scroll = ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000
})
scroll.reveal('.image-transform', {
    origin: 'bottom',
    interval: 100,
    delay: 300
})
scroll.reveal('.text-transform', {
    origin: 'top',
    interval: 100,
    delay: 300
})
scroll.reveal('.services-transform', {
    origin: 'bottom',
    interval: 100,
    delay: 300
})
scroll.reveal('.how-transform', {
    origin: 'top',
    interval: 100,
    delay: 300
})

