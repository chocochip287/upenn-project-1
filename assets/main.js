var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function getDrinks() {
  var ingredientName = document.getElementById("searchBar").value;
  var requestUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
    ingredientName;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      renderDrinks(data);
    });
}
var drinkBox = document.querySelector("#drinkContainer");
var showDrinks = document.querySelector("#getDrinks");
showDrinks.addEventListener("click", getDrinks);

function renderDrinks(drinkData) {
  console.log({ drinkData });
  drinkBox.innerHTML = "";
  for (var i = 0; i < drinkData.drinks.length; i++) {
    // create
    var drinkName = document.createElement("p");
    // modify
    drinkName.textContent = drinkData.drinks[i].strDrink;
    // append
    document.getElementById("drinkContainer").append(drinkName);
  }
}

// Second API (Project requires at least 2)

var requestUrl = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("List of ingredients");
    console.log(data);
  });
