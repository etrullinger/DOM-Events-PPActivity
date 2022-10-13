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


// // James Yeates' Demo
// let state = {
//     counter: 0,
//     fontSize: 16,
//     backgroundColor: 'red'
// }

// function increment() {
//     state.counter++
// }

// increment();
// console.log(state);

// // defining the function to increase size
// function increaseFontSize() {
//     if(state.fontSize < 100);
//     state.fontSize++;
// }

// // defining the function to decrease size
// function decreaseFontSize() {
//     if(state.fontSize > 1);
//     state.fontSize--;
// }

// // calling function to test to see if they are working
// increaseFontSize();
// console.log(state);

// decreaseFontSize();
// console.log(state);

// function changeBackground(color) {
//     state.backgroundColor = color;
// }

// changeBackground('green');
// console.log(state);