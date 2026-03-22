const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-links');
const navItemsMobile = document.querySelectorAll('.nav-links li a');

mobileMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle('is-active');
    navMenu.classList.toggle('active');
});

navItemsMobile.forEach(item => {
    item.addEventListener('click', function () {
        mobileMenu.classList.remove('is-active');
        navMenu.classList.remove('active');
    });
});


//hero listin voice clip
const voiceBtn = document.getElementById('voiceBtn');
const voiceAudio = document.getElementById('voiceAudio');

if (voiceBtn && voiceAudio) {
    voiceBtn.addEventListener('click', function (event) {
        event.preventDefault();

        if (voiceAudio.paused) {
            voiceAudio.play();
        } else {
            voiceAudio.pause();
        }
    });
}


// --- Resume Scroll Animation ---

const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-item');

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

timelineItems.forEach(item => {
    observer.observe(item);
});