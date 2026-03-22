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

// --- Tab Switching tabs for Projects/Assignments ---
function switchTab(tabName) {
    const tabProjects = document.getElementById('tab-projects');
    const tabAssignments = document.getElementById('tab-assignments');
    const gridProjects = document.getElementById('grid-projects');
    const gridAssignments = document.getElementById('grid-assignments');

    if (tabName === 'projects') {
        gridProjects.style.display = 'flex'; 
        gridAssignments.style.display = 'none';

        tabProjects.classList.add('active');
        tabAssignments.classList.remove('active');
        
    } else if (tabName === 'assignments') {
        gridProjects.style.display = 'none';
        gridAssignments.style.display = 'grid'; 

        tabAssignments.classList.add('active');
        tabProjects.classList.remove('active');
    }
}