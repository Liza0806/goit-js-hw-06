function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const plaseForBoxes = document.querySelector("#boxes");
const buttonCreateElements = document.querySelector("[data-create]");
const buttonDestroyElements = document.querySelector("[data-destroy]");
let elements = document.querySelector("input");
let squares = ``;

function renderBoxes() { 
  for (let i = 0; i < elements.value; i++) {

  let width = 30 + 10*i;
  let height = 30 + 10*i;

  let color = getRandomHexColor();
      squares += `<div style = "width:${width}px;  
      height:${height}px; 
      background-color:${color}; 
      margin-bottom: 10px; 
      margin-top: 10px;
      margin-right: auto;
      " >
    </div>`;
    }
 
  plaseForBoxes.insertAdjacentHTML('afterBegin', squares);
  }

function destroyerOfElements (){

  plaseForBoxes.innerHTML = '';
  elements.value = '';
}

buttonCreateElements.addEventListener('click', renderBoxes)
buttonDestroyElements.addEventListener('click', destroyerOfElements)
