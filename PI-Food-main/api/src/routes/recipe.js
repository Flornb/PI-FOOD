const { getAllRecipes }= require('../controllers/getAllRecipes');
// const { getApiInfo } = require ('../controllers/getApiInfo');
const express = require("express");
const router = new express.Router();
const { Recipe, Diet } = require('../db.js');

// const axios = require('axios');

// const router = Router();
// const diet = require ('./diet');

// const getAllRecipes = require("./getAllRecipes");
// function getRecipes(req,res) {
//     getAllRecipes()
//     .then((dataApi)=>{
//         console.log("RESPUESTA", res)    
//         res.send(dataApi)
//     }
//     )
//     .catch((error) =>{
//         console.log(error);
//         res.status(500).send("Server Error");
//     })
// }
//

const { API_HOST, API_KEY } = process.env;

//find by name in url (query) http://localhost:3001/recipes?name=CanNellini  (example in URL - this works)
router.get ('/', async (req,res)=>{
    const {name} = req.query;
    const totalRecipes = await getAllRecipes();
    try {
        if (name){ //find if there is a matching name  
        let recipeName = await totalRecipes.filter(item => item?.name.toLowerCase().includes(name.toLowerCase()))  //toLowerCase transforms the name we are looking for into lowercase. It must be put both in the name entered by query, and in the name that is in the db
        recipeName.length ? //match found ?
        res.status(200).send(recipeName) : 
        res.status(404).send('Sorry, the recipe is not found');
        } else{
            res.status(200).send(totalRecipes) //if there is not query send all recipes
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:error.message});
    }
    });


//find a specific recipe by his id
router.get('/:id', async(req, res) => {
    const { id }= req.params;
    const totalRecipes = await getAllRecipes();
    if(id){
        let idRecipe = totalRecipes.filter((item) => item?.id === Number(id))  //find if the id pass by params matches with the recipe id
        idRecipe.length?
        res.status(200).json(idRecipe) :
        res.status(404).send ('Sorry, the recipe is not found')
        }
    });

    //post and create a new recipe
router.post('/', async (req, res)=>{
    const {  //require the attributes that comes from body
        id,
        name, 
        image, 
        summaryDish,
        healthScore,
        stepByStep,
        createdInDb,
        diets,
    } = req.body

    const recipeCreate = await Recipe.create({ //create a new recipe with this attributes, same as we requested from body
        id,
        name, 
        image, 
        summaryDish,
        healthScore,
        stepByStep,
        createdInDb,
    })

    const diet = await Diet.findAll({ //the diet must be found in the model with all the diets
        where: {
            name : diets
        } //find matches with the diet required in body
    })
    recipeCreate.addDiets(diet) //add brings from table the diets in db
    res.send("Recipe is succesfully crated")
}) 

module.exports = router;