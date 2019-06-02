// ghost blog api - this secret is CORS protected
ghost.init({
    clientId: "ghost-frontend",
    clientSecret: "eb3fea17514e"
});

document.addEventListener("DOMContentLoaded", function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {     
        var o = JSON.parse(this.responseText);
        for(var post of o.posts)
        {
            let column = document.createElement("div");
            column.classList.add("column");

            let card = document.createElement("div");
            card.classList.add("card");

            let cardImage = document.createElement("div");
            cardImage.classList.add("card-image")

            let link = document.createElement("a");
            link.setAttribute("href", post.url);

            let image = document.createElement("img");
            image.classList.add("image");
            image.setAttribute("src", post.feature_image);
            
            let cardContent = document.createElement("div");
            cardContent.classList.add("card-content");
            cardContent.classList.add("content");
            
            let title = document.createElement("h4");
            title.textContent = post.title;

            let desc = document.createElement("p");
            desc.innerHTML = post.meta_description;
        
            link.appendChild(image);
            cardImage.appendChild(link);
            card.appendChild(cardImage);

            cardContent.appendChild(title);
            cardContent.appendChild(desc);
            
            card.appendChild(cardContent);

            column.appendChild(card);

            document.getElementById("updates").append(
                column
            );
        }
      }
    };
    xhttp.open("GET", ghost.url.api('posts', {absolute_urls: true, limit: 3}), true);
    xhttp.send();
});