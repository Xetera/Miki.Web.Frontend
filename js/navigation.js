document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    if ($navbarBurgers.length > 0) {

        $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

                const target = el.dataset.target;
                const $target = document.getElementById(target);

                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
});

window.addEventListener("scroll", () => {
    console.log("scroll" + window.scrollY);
    var nav = document.getElementById("global-nav-bar");
    if(window.scrollY > 100)
    {
        if(!nav.classList.contains("is-fixed-top"))
        {
            nav.classList.add("is-fixed-top");
        }
    }
    else
    {
        if(nav.classList.contains("is-fixed-top"))
        {
            nav.classList.remove("is-fixed-top");
        }
    }
});