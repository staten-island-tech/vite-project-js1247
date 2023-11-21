import "../styles/style.css";
import { DOMSelectors } from "./dom";
import { menu } from "./menu";

document.querySelector("#theme-switch").addEventListener("click", function() {
    if(document.body.classList.contains("cool")) {
      document.body.classList.add("warm");
      document.body.classList.remove("cool");
    }
    else {
      document.body.classList.add("cool");
      document.body.classList.remove("warm");
    }
  });
  function insertAll() {
    menu.forEach((food) => DOMSelectors.cards.insertAdjacentHTML("beforeend", 
    `<div class="card" id="all">
      <h2 class="card-title">${food.name}</h2>
      <img src="${food.image}" alt="${food.name}" class="card-image">
      <h3 class="card-description">${food.price} | ${food.pieces} | ${food.calories} calories</h3>
    </div>
    `)
    );
  }