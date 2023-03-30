//this file reducer receives the current state of the application and the action to be performed and return a new state, without directly modifying the current state.
import {
    FILTER_BY_CREATED_IN,
    FILTER_BY_DIET_NAME,
    GET_RECIPES,
    // GET_RECIPE_ID,
    // POST_RECIPES,
    GET_DIETS,
    POST_RECIPES,
    GET_RECIPE_NAME,
    ORDER_BY_HEALTHSCORE,
    // FILTER_BY_CREATED_IN,
    // ORDER_BY_NAME,
    // ORDEN_BY_HEALTHSCORE 
} from './types.js';

const initialState = {
    recipes: [],
    filterRecipes: [],
    diets: [],
    allRecipes: [],
};
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_RECIPES:
            return{
                ...state,
                recipes: action.payload,
                filteredRecipes: action.payload //in state recipes that is an empty array, send everything that comes from recipes
            };

        case GET_DIETS:
            return {
                ...state,
                diets: action.payload
            };

        case POST_RECIPES:
            return{
                ...state,
            };

        case FILTER_BY_DIET_NAME: 
            const allRecipes = state.filterRecipes;
            const dietsFiltered = action.payload === 'All'? state.allRecipes 
            :allRecipes.filter((item) => 
              item.diets?.includes(action.payload)) //payload is the filter selected from diets in home
            return{
                ...state,
                filteredRecipes: dietsFiltered
            };

        case GET_RECIPE_NAME:
            const addRecipe = state.allRecipes
            return {
                ...state,
                recipes: action.payload,
                allRecipes: addRecipe
            }

        case FILTER_BY_CREATED_IN:
            return {
                ...state,
                

            };

        case ORDER_BY_HEALTHSCORE: 
            const recipesByScore = action.payload 
            return {

            }






        default:
            return { 
                ...state 
            };
    }
}

export default rootReducer;