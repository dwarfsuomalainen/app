
let recipe = {
    pasta : {name: "pasta",
    instructions: ["cook fast","8 mins"],
    ingredients: ["pasta","water","salt"]},
    pizza : {name: "pizza",
    instructions: ["bake ","14,50 mins"],
    ingredients: ["dough","much meatt","sauce"]},
    lasagna : {name: "lasaggna",
    instructions: ["boil", "10 mins 5 mins cool","bake","14 mins"],
    ingredients: ["dough","meat","sauce"]}

}

const express = require("express");
const app = express();
const port = 1234;
app.set('view engine', 'ejs');


app.get("/", (req, res) => {
    res.render("public/index");
});

/*/* GET home page. */
  /*router.get("/", (req, res, next) =>{
  res.render('index');
});*/


/*app.get('/', (req, res) => {
        res.json(recipe);
        console.log(recipe);

    });*/

app.get('/recipe/:food', (req, res) => {
        let food = recipe.id;

        console.log(recipe[req.params.food]);

        console.log(recipe[req.params.food]);
        //res.json(recipe[req.params.food]);
        res.json({name: req.params.food});
        
    });



//app.post("/recipe")    
app.listen(port, () => console.log ('Listening... '));
