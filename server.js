
/*let recipe = {
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
*/
const express = require("express");
const app = express();
const port = 1234;
app.set('view engine', 'ejs');

var json = require("./public/recipe/recipe.json");
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
    var nameto = json.pasta.name;
    var insto = json.pasta.instructions;
    var ingto = json.pasta.ingredients;
    console.log(nameto);
    var tagline = "noTAG!!!!";
    res.render("index", {
        nameto: nameto,
        insto: insto,
        ingto: ingto
      });
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
        let food = json.name;

        //var nameJ = JSON.parse(json);
        
        console.log(json);

        //res.json(recipe[req.params.food]);
        res.json({name: req.params.id});
        
    });

app.post("/recipe/", (req, res) =>{

    console.log(req.body);
    res.send(req.body);

});


//app.post("/recipe")    
app.listen(port, () => console.log ('Listening... '));
