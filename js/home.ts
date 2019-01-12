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

// ghost blog api - this secret is CORS protected
ghost.init({
    clientId: "ghost-frontend",
    clientSecret: "eb3fea17514e"
});

document.addEventListener("DOMContentLoaded", function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        
        var o = JSON.parse(this.responseText);

        for(var post in o.posts)
        {
            let div = new Element();
            div.id = "div";

            let link = new Element();
            link.id = "a";

            let image = new Element();
            image.id = "img";
            image.classList.add("image");
            image.setAttribute("src", ghost.url + post.feature_image);
            
            div.appendChild(link);
            div.appendChild(image);
            

            document.getElementById("updates").append(
                div
            );
        }
      }
    };
    xhttp.open("GET", ghost.url.api('posts', {limit: 3}), true);
    xhttp.send();
});