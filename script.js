// Fade-in при скролле
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
    });
}, {
    threshold: 0.2
});

faders.forEach(el => observer.observe(el));

// Появление сразу при загрузке (hero)
window.addEventListener('load', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        el.classList.add('show');
    });
});