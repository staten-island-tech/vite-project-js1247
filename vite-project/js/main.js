import "../styles/style.css";
import { DOMSelectors } from "./dom";
import { menu } from "./menu";

document.querySelector("#theme-switch").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});

//   function insertAll() {
//     menu.forEach((food) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
//     `<div class="card" id="all">
//       <h2 class="card-title">${food.name}</h2>
//       <img src="${food.image}" alt="${food.name}" class="card-image">
//       <h3 class="card-description">${food.price} Popularity: ${food.popularity}</h3>
//     </div>
//     `)
//     );
//   }

//   function insertBurgers() {
//     const menuFilters = menu.filter((food) => food.type.includes("Burgers"));
//     menuFilters.forEach((food) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
//     `<div class="card" id="Burgers">
//       <h2 class="card-title">${food.name}</h2>
//       <img src="${food.image}" alt="${food.name}" class="card-image">
//       <h3 class="card-description">${food.price} Popularity: ${food.popularity}</h3>
//     </div>
//     `)
//     );
//   }

//   function insertSides() {
//     const menuFilters = menu.filter((food) => food.type.includes("Sides"));
//     menuFilters.forEach((food) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
//     `<div class="card" id="Sides">
//       <h2 class="card-title">${food.name}</h2>
//       <img src="${food.image}" alt="${food.name}" class="card-image">
//       <h3 class="card-description">${food.price} Popularity: ${food.popularity}</h3>
//     </div>
//     `)
//     );
//   }

//   function insertDrinks() {
//     const menuFilters = menu.filter((food) => food.type.includes("Drinks"));
//     menuFilters.forEach((food) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
//     `<div class="card" id="Drinks">
//       <h2 class="card-title">${food.name}</h2>
//       <img src="${food.image}" alt="${food.name}" class="card-image">
//       <h3 class="card-description">${food.price} Popularity: ${food.popularity}</h3>
//     </div>
//     `)
//     );
//   }

//   function insertSpecials() {
//     const menuFilters = menu.filter((food) => food.type.includes("Specials"));
//     menuFilters.forEach((food) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
//     `<div class="card" id="Specials">
//       <h2 class="card-title">${food.name}</h2>
//       <img src="${food.image}" alt="${food.name}" class="card-image">
//       <h3 class="card-description">${food.price} Popularity: ${food.popularity}</h3>
//     </div>
//     `)
//     );
//   }

// DOMSelectors.all.addEventListener("click", function () {
//   DOMSelectors.cards.innerHTML = '';
//   insertAll();

// });

// DOMSelectors.burgers.addEventListener("click", function () {
//   DOMSelectors.cards.innerHTML = '';
//   insertBurgers();
// });

// DOMSelectors.sides.addEventListener("click", function () {
//   DOMSelectors.cards.innerHTML = '';
//   insertSides();
// });

// DOMSelectors.drinks.addEventListener("click", function () {
//   DOMSelectors.cards.innerHTML = '';
//   insertDrinks();
// });

// DOMSelectors.specials.addEventListener("click", function () {
//   DOMSelectors.cards.innerHTML = '';
//   insertSpecials();
// });

// insertAll();

const deleteFood = function () {
  document.querySelectorAll("#all-button").forEach((food) => food.remove());
};
let buttons = document.querySelectorAll(".food-button");
buttons.forEach((btn) =>
  btn.addEventListener("click", function () {
    let filter = btn.textContent;
    deleteFood();
    menu
      .filter((food) => food.type.includes(filter))
      .foreach((cards) => foodCreate(cards));
  })
);