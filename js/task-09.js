


let changeColor = function getRandomHexColor() {
 
   let currentColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    bodyJs.style.backgroundColor = `${currentColor}`
    spanJs.textContent = `${currentColor}`
  }
  

  const bodyJs = document.querySelector("body")
  const buttonJs = document.querySelector("button")
  const spanJs = document.querySelector("span")
  console.log(spanJs.textContent )
  buttonJs.addEventListener("click", changeColor)
  