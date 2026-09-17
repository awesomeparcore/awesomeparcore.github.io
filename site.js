document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
	const isOpen = navLinks.classList.toggle('open');
	navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', () => {
		navLinks.classList.remove('open');
		navToggle.setAttribute('aria-expanded', false);
	});
});

// Typed line in the hero terminal
const typedEl = document.getElementById('typedLine');
const phrases = ['open to internships', 'building things', 'always learning'];
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
	const current = phrases[phraseIndex];

	if (!deleting) {
		charIndex++;
		typedEl.textContent = current.slice(0, charIndex);
		if (charIndex === current.length) {
			deleting = true;
			setTimeout(typeLoop, 1400);
			return;
		}
	} else {
		charIndex--;
		typedEl.textContent = current.slice(0, charIndex);
		if (charIndex === 0) {
			deleting = false;
			phraseIndex = (phraseIndex + 1) % phrases.length;
		}
	}

	setTimeout(typeLoop, deleting ? 40 : 80);
}

typeLoop();
