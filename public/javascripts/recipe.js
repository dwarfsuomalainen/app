import "./public/stylesheets/styles.css";


let json = require("/LUT/week_4/recipeApp/public/recipe/recipe.json");

let nameJson = JSON.parse(json);

let nameRec = document.createElement('h1');
nameRec.innerHTML = (nameJson.name).value;
document.body.appendChild(nameRec);
