//ANIMATION LOGIC

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries) {
entries.forEach(entry => {
if (!entry.isIntersecting) return;
entry.target.classList.add('show');
});
}, appearOptions);

faders.forEach(fader => {
appearOnScroll.observe(fader);
});
