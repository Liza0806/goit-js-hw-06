let loginFormJs = document.querySelector(".login-form")
let inputMailJs = document.getElementsByTagName("input")[0]

let inputPasswordJs = document.getElementsByTagName("input")[1]

loginFormJs.addEventListener("submit", sub)
function sub (event){
    event.preventDefault();
if(inputMailJs.value === "" || inputPasswordJs.value === ""){
    alert("Please fill in all the fields")
}
 else{ 
const data = new FormData(event.currentTarget);
console.log(data);
data.forEach((value, name) => {
    console.log("onFormSubmit -> name", name )
    console.log("onFormSubmit -> value", value );
  
    loginFormJs.reset();
    
})

}

}
