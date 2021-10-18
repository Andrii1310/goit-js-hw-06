const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const createIngredients = ingredients.map(ingredient => {
  const itemIngredient = document.createElement("li");
  itemIngredient.classList.add("item");
  itemIngredient.textContent = ingredient;
  return itemIngredient;
});
listIngredients.append(...createIngredients);
console.log(listIngredients);