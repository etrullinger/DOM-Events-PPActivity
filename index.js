function randomNumber() {
    let maxNumber = document.querySelector("#maxnumber").value;
    let randomNumber = Math.floor(Math.random() * (maxNumber - 1)) + 1;
    let output = document.querySelector("#output");
    output.textContent = randomNumber;
}
