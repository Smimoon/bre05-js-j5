window.addEventListener("DOMContentLoaded", () => {
    let todos = [
        "Rappeler l'école",
        "Faire les courses",
        "Récupérer le colis à la Poste",
        "Faire la litière du chat",
        "Ranger le bureau"
    ];
    let body = document.querySelector("body");
    let list = document.createElement("ul");
    
    
    body.appendChild(list);
    
    for(let task of todos) {
        let element = document.createElement("li");
        list.appendChild(element);
        let todo = document.createTextNode(task);
        element.appendChild(todo);
        
    }
    let element = document.querySelectorAll("li");
    for (let li of element) {
        li.addEventListener("click", (event) => {
            li.style.textDecoration = "line-through";
        }); 
    };
});