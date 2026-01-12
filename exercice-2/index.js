window.addEventListener("DOMContentLoaded", () => {
    let instructions = document.querySelector("ol");
    let etape = document.querySelector("ol li:first-child");
    let item = document.createElement("li");
    let itemText = document.createTextNode("Préchauffer le four");
    
    instructions.insertBefore(item, etape);
    item.appendChild(itemText);
})