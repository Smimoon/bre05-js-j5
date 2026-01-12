window.addEventListener("DOMContentLoaded", () => {
    let recette = document.querySelector("ul");
    let item = document.createElement("li");
    let itemText = document.createTextNode("Beurre");
    item.appendChild(itemText);
    recette.appendChild(item);
});
