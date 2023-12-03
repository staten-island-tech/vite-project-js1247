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

function insertCard(food) {
  DOMSelectors.cards.insertAdjacentHTML(
    "beforeend",
    `<div class="card" id="${food.type}">
      <h2 class="card-title">${food.name}</h2>
      <img src="${food.image}" alt="${food.name}" class="card-image">
      <h3 class="card-description">${food.price} Popularity: ${food.popularity}</h3>
    </div>`
  );
}

function removeAllCards() {
  document.querySelectorAll(".card").forEach((card) => card.remove());
}

function mapMenuData() {
  return menu.map((food) => ({
    type: food.type,
    name: food.name,
    image: food.image,
    price: food.price,
    popularity: food.popularity,
  }));
}

function filterAndInsert(category) {
  removeAllCards();

  const menuData = mapMenuData();

  let filteredMenu;
  if (category === 'all') {
    filteredMenu = menuData;
  } else {
    filteredMenu = menuData.filter(food => food.type.includes(category));
  }

  filteredMenu.forEach(food => {
    insertCard(food);
  });
}

DOMSelectors.all.addEventListener("click", () => filterAndInsert('all'));
DOMSelectors.burgers.addEventListener("click", () => filterAndInsert('Burgers'));
DOMSelectors.sides.addEventListener("click", () => filterAndInsert('Sides'));
DOMSelectors.drinks.addEventListener("click", () => filterAndInsert('Drinks'));
DOMSelectors.specials.addEventListener("click", () => filterAndInsert('Specials'));

filterAndInsert('all');