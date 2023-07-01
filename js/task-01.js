
const elementsList = document.querySelectorAll(".item ul")
const category = document.querySelectorAll(".item")

const numberOfElements = document.querySelectorAll(".item").length

elementsList.forEach(el => console.log(`Number of categories: ${numberOfElements} 
Category: ${el.parentElement.firstElementChild.textContent} 
Elements: ${el.children.length}`))