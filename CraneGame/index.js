const crane = document.querySelector("#crane");

function moveUp() {
    crane.style.padding = "0 0 100px 0";
}

function moveDown() {
    crane.style.padding = "100px 0 0 0";
}

function moveLeft() {
    crane.style.padding = "0 100px 0 0";
}

function moveRight() {
    crane.style.padding = "0 0 0 100px";
}