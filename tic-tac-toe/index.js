function isBoxEmpty(box) {
    if (box.textContent.trim() === "") {
        return true;
    }
    else {
        return false;
    }

}
function humanPlayer(boxes) {
    for (let box of boxes) {
        box.addEventListener("click", (event) => {
            let target = event.target;
            if (isBoxEmpty(target) === true) {
                let cross = document.createTextNode("X");
                box.appendChild(cross);
                return target;
            }
        });
        
    };
}
function computer(boxes) {
    
}

function restartGame(reset, boxes) {
    reset.addEventListener("click", (event) => {
        for(let box of boxes) {
            box.textContent = "";
        }
    });
}


window.addEventListener('DOMContentLoaded', () => {
    let boxes = document.querySelectorAll("#game-board div");
    let reset = document.getElementById("reset");
    
    humanPlayer(boxes);
    computer(boxes);
    
    restartGame(reset, boxes);

});
