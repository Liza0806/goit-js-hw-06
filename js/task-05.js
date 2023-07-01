const nameInputForm = document.querySelector("#name-input");
const nameOutputForm = document.querySelector("#name-output");

nameInputForm.addEventListener('input', () => {
    
        if (nameInputForm.value !== "") {
            nameOutputForm.textContent = nameInputForm.value
        }
         else   {nameOutputForm.textContent = "Anonymous"   
    }      
});



