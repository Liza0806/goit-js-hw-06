const textJs = document.querySelector("#text")
const inputJs = document.querySelector("#font-size-control")
const changeSize = ()=> {

    textJs.style.fontSize = `${inputJs.value}px`
}
inputJs.oninput = changeSize;