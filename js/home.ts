let previousPosition = window.scrollY;
let header_nav = document.getElementById("global-nav-bar");

header_nav.classList.add("is-dark", "navbar-large", "is-fixed-top", "is-smoother");

window.onscroll = e => {
    if (window.scrollY > 0 && previousPosition === 0) {
        header_nav.classList.remove("navbar-large");
        header_nav.classList.remove("is-dark");
    } else if (window.scrollY <= 0) {
        header_nav.classList.add("navbar-large");
        header_nav.classList.add("is-dark");
    }

    previousPosition = window.scrollY;
};