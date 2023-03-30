const { Router } = require('express');
// Import all routers;
// Ex: const authRouter = require('./auth.js');
// const getAllRecipes = require('../controllers/getAllRecipes');
// const { Recipe, Diet } = require ('../db.js');
const recipe = require('./recipe.js');
const diet = require ('./diet.js')

const router = Router();

// configure routers
// Ex: router.use('/auth', authRouter);

router.use('/recipes', recipe);
router.use('/diets', diet);

module.exports = router;
