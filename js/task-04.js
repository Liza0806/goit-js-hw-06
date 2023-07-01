const incrementJs = document.querySelector("[data-action='increment']")
const decrementJs = document.querySelector("[data-action='decrement']")



let counterValue = 0;


incrementJs.addEventListener("click", increment);
function increment() {
    counterValue += 1;
    document.querySelector("#value").textContent = counterValue;
 }
decrementJs.addEventListener("click", decrement);

function decrement() {
    counterValue -= 1;
    document.querySelector("#value").textContent = counterValue;
 }

