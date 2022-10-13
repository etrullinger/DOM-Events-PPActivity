// Your website should have a text input box labeled "Number of sides" 
// and a button labeled "Roll". When the button is clicked, 
// a random number will appear between 1 and the number that the user input. 
// For example, if the user types 6 into the box and clicks the button, 
// then a number between 1 to 6 will appear. 
// A different random number should be generated every time that button is clicked.

function randomNumber() {
    let maxNumber = document.querySelector("#maxnumber").value;
    let randomNumber = Math.floor(Math.random() * (maxNumber - 1)) + 1;
    let output = document.querySelector("#output");
    output.textContent = randomNumber;
}
