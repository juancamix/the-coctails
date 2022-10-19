URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin";
const container = document.getElementById("container");

window.addEventListener('DOMContentLoaded', getApi);

function getApi() {
    fetch(URL)
    .then(response => response.json())
    .then(data => data["drinks"].map(drinks => {

        const div = document.createElement("div");
        div.classList.add("card");
        
        const name = document.createElement("h2");
        name.textContent = drinks["strDrink"];
        name.classList.add("name");

        const img = document.createElement("img");
        img.src = drinks["strDrinkThumb"];
        img.classList.add("img");

        div.appendChild(name);
        div.appendChild(img);
        container.appendChild(div);
    }))
}