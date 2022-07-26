const categoriesNumberEl =
  document.querySelectorAll("#categories .item").length;
console.log("Number of categories: ", categoriesNumberEl);

const listOfItems = document.querySelectorAll("#categories .item");

listOfItems.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements: ", item.lastElementChild.children.length);
});
