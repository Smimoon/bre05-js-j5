window.addEventListener("DOMContentLoaded", () => {
    let paragraphe = document.querySelector("p:last-of-type");
    let element = document.createElement("a");
    let elementText = document.createTextNode("l'article de Wikipédia sur le Lorem Ipsum");
    paragraphe.appendChild(element);
    element.appendChild(elementText);
    element.setAttribute("href", "https://fr.wikipedia.org/wiki/Lorem_ipsum.");
    
})