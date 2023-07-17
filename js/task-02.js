const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.getElementById("ingredients")

const elements = ingredients.map( ingredient => {
  const ItemEl = document.createElement("li");
  ItemEl.textContent = ingredient;
  // ItemEl.classList.add("item");
  ItemEl.className = "item";
  return ItemEl;
  
});

ulEl.append(...elements);
