function changeColor() {
    let input = document.querySelector("#input").value;
    let body = document.querySelector("body");
    if (input == "green") {
        body.style.backgroundColor = "green";
    } else if (input == "red") {
        body.style.backgroundColor = "red";
    } else if (input == "blue") {
        body.style.backgroundColor = "blue";
    } else if (input == "yellow") {
        body.style.backgroundColor = "yellow";
    } else if (input == "purple") {
        body.style.backgroundColor = "purple";
    }
}