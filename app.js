"use strict";

//Variables ...
let categorySelected = "home";

//Selecteurs des éléments
const inputNewTodo = document.querySelector("#input-todo");
const list = document.querySelector("#list");
const containerCategory = document.querySelector("#category-container");
const categorys = document.querySelectorAll("div.category");

//EventListener
inputNewTodo.addEventListener("keyup", newTodo);

//Insertion d’un nouveau todo
//Fonction pour ajouter un nouveau todo
function newTodo(e) {
  if (e.code == "Enter") {
    //Verifie si la touche est bien Enter
    const html = `
    <li data-category="${categorySelected}" data-done="false">
    ${inputNewTodo.value}
    <div class="button-done">❌</div>
    </li>`;

    list.insertAdjacentHTML("afterbegin", html); //Insértion du HTMl préparer avant

    inputNewTodo.value = ""; //Enlever le texte
    inputNewTodo.blur(); //Enlever le focus de l'élément
  }
}

//Catégories
//Fonction selection catégorie avec EventListener de délégation
containerCategory.addEventListener("click", (e) => {
  if (e.target.classList.contains("category")) {
    //Verifie si l'élément à la class category
    categorys.forEach((el) => (el.dataset.selected = "false")); // Mettre en false les autres
    e.target.dataset.selected = "true"; //Mettre en vert l'élément sur lequel on clique
    categorySelected = e.target.dataset.category; //Mets à jour la variable de la catégorie sélectionner pour que ce soit juste dans la todo
  }
});

//Toggle fait/non-fait et effacer 
//Fonction fait/non fait/suppression toggle avec EventListener de délégation
list.addEventListener("click", (e) => {
  switch (e.target.tagName) {
    case "LI": //Si c'est un LI et donc un élément de la liste
      e.target.dataset.done == "true"
        ? (e.target.dataset.done = "false")
        : (e.target.dataset.done = "true"); //Si c'est déjà sur vrai donc se sera faux, etc..
      break;
    case "DIV": //Si c'est la DIV et donc la croix
      e.target.parentNode.remove(); //Supprimer le parent du boutton croix et donc indirectement lui même
      break;
  }
});