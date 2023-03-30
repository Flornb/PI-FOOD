// THE CONECTION BETWEN FRONT AND BACK HAPPENS IN THIS FILE 
//the logic goes into file reducer (here only goes the dispatch of a type - filters and routes)
import {
    FILTER_BY_DIET_NAME,
    GET_RECIPES,
    // GET_RECIPE_ID,
    // POST_RECIPES,
    GET_DIETS,
    // GET_RECIPE_NAME,
    FILTER_BY_CREATED_IN,
    ORDER_BY_NAME,
    ORDER_BY_HEALTHSCORE 
} from './types.js';

import axios from 'axios';

// BRINGS ALL RECIPES TO FRONT
export const getRecipes = () => {
    return async function(dispatch){
        const dataApi = await axios.get('http://localhost:3001/recipes');
        const recipes = dataApi.data;
        return dispatch({
            type: GET_RECIPES,
            payload: recipes
        })
    }
};

//BRINGS RECIPE BY ID

//MANAGE ERRORS BY QUERY


//BRINGS ALL DIETS TO FRONT
export const getDiets = () => {
    return async function (dispatch){
        const dataApi = await axios.get('http://localhost:3001/diets');
        const diets = dataApi.data;
        return dispatch({
            type: GET_DIETS,
            payload: diets
        })
    }
}

//CREATE RECIPE
export const postRecipes = (payload) => {
    return async function () {
        const postRecipe = await axios.post('http://localhost:3001/recipes', payload)
        return postRecipe
    }
}


//FILTERS:
//filtered the recipes by type of diet
export const filterRecipesByDietName = (payload) => {
    // console.log(payload);
    return {
        type: FILTER_BY_DIET_NAME,
        payload
    }
};


//filtered by created in API or in DB
export const filterByCreateIn = (payload) => {
    return {
        type: FILTER_BY_CREATED_IN,
        payload
    }
    
};

//filtered by alphabetical order
export const orderByRecipeName = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

//filtered by healthScore
export const orderByHealthScore = (payload) => {
    return {
        type: ORDER_BY_HEALTHSCORE,
        payload
    }
}

// export const filters = (payload) => {
//     return{
//         type: FILTERS,
//         payload
//     }
// }
