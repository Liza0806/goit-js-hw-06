const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let elements = [];

for (let i = 0; i < ingredients.length; i++){
  let li = document.createElement("li")
li.classList.add("item")
li.textContent = `${ingredients[i]}`
  elements.push(li)
}

const elementsList = document.querySelector("#ingredients")
elementsList.append(...elements)