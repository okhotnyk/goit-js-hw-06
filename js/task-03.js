const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// ------------ adding method append -------------
// const allImageItemsEl = [];
// const galleryEl = document.querySelector(".gallery");
// console.log(galleryEl);
// images.forEach((image) => {
//   const galleryImageItem = document.createElement("img");
//   galleryImageItem.src = image.url;
//   galleryImageItem.alt = image.alt;
//   galleryImageItem.width = 640;

//   const galleryListItem = document.createElement("li");
//   galleryListItem.classList.add("gallery-item");
//   galleryListItem.appendChild(galleryImageItem);

//   allImageItemsEl.push(galleryListItem);
// });

// galleryEl.classList.add("flex-container");
// galleryEl.append(...allImageItemsEl);

// ---------- adding method insertAdjacentHTML ---------

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);
const markup = images
  .map(
    ({ url, alt }) => `<li><img src="${url}" alt="${alt}" width="360" /></li>`
  )
  .join(" ");
console.log(markup);
galleryEl.classList.add("flex-container");
galleryEl.insertAdjacentHTML("beforeend", markup);

const allLiEl = document.querySelectorAll("li");
console.log(allLiEl);
allLiEl.forEach((el) => el.classList.add("gallery-item"));
