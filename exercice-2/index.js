window.addEventListener("DOMContentLoaded", () => {
    let instructions = document.querySelector("ol");
    let item = document.createElement("li");
    let itemText = document.creatTextNode("Préchauffer le four");
    
    item.appendChild(itemText);
    instructions.insertBefore(item);
})