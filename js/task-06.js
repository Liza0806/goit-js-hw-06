const inputJs = document.querySelector("#validation-input")

inputJs.onblur = () =>{
    if (inputJs.value.length === Number(inputJs.dataset.length)){
             inputJs.classList.add("valid")
        } else {
            inputJs.classList.add("invalid")
        }
}

        
inputJs.onfocus = () => {
    if (inputJs.classList.contains('invalid')) {
      inputJs.classList.remove('invalid');
     
    }}
