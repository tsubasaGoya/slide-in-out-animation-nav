const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItemArray = [nav1,nav2,nav3,nav4,nav5];

function navAnimate(remove, add) {
    navItemArray.forEach((nav, i) => {
        i++;
        nav.classList.replace(`slide-${remove}-${i}`, `slide-${add}-${i}`);
    })
}

function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate in - Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // Animate in - Nav
        navAnimate('out','in');
    } else {
        // Animate out - Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Animate out - Nav
        navAnimate('in','out');
    }
}
// Event Listeners
menuBars.addEventListener('click',toggleNav);
navItemArray.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
})