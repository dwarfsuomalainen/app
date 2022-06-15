
let recipe = {
    pasta : {name: "pasta",
    instructions: ["cook fast","8 mins"],
    ingredients: ["pasta","water","salt"]},
    pizza : {name: "pizza",
    instructions: ["bake ","14,50 mins"],
    ingredients: ["dough","much meatt","sauce"]},
    lasagna : {name: "lasaggna",
    instructions: ["boil", "10 mins","bake","14 mins"],
    ingredients: ["dough","meat","sauce"]}

}

const express = require('express');
const app = express();

const port = 1234;


app.get('/', (req, res) => {
        res.json(recipe);
        console.log(recipe);

    });

app.get('/recipe/:food', (req, res) => {
        let food = recipe.id;

        console.log(recipe[req.params.food]);

        console.log(recipe[req.params.food]);
        //res.json(recipe[req.params.food]);
        res.json({name: req.params.food});
        
    });

/*let out = document.createElement('h2');
let recipes = document.getElementById ('recipe');
recipes.appendChild(out);
out.innerHTML({name: req.params.food});*/


//app.post("/recipe")    
app.listen(port, () => console.log ('Server listening a port ${port}!'));



/*const http = require ('http');
console.log('it runs');
http.createServer(function(req,res) {
res.write('It works');
res.end();
console.log('response ended');
}).listen(3000);*/