function largerText() {
    text = document.querySelector("#text");
    style = window.getComputedStyle(text, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    if ((currentSize + 8) > 100) {
        text.style.fontSize = "100px";
    } else {
    text.style.fontSize = (currentSize + 8) + 'px';
    }
};  

function smallerText() {
    text = document.querySelector("#text");
    style = window.getComputedStyle(text, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    if ((currentSize - 8) < 1) {
        text.style.fontSize = "1px";
    } else {
    text.style.fontSize = (currentSize - 8) + 'px';
    }
};