let count = 0;
const counter = document.querySelector("#counter");
counter.innerText = count;

const cookie = document.querySelector(".cookie");
cookie.addEventListener("click", iterate);

function iterate() {
    count += 1;
    counter.innerText = count;
}
