const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const allListItems = [];
const ulIngredientsEl = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  allListItems.push(listItem);
});

ulIngredientsEl.append(...allListItems);
