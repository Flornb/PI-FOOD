require("dotenv").config();
const { API_HOST, API_KEY } = process.env;
const axios = require ("axios");

//get recipes with this items from api
const getApiInfo = async () => {
    try {
        const apiUrl = `${API_HOST}?apiKey=${API_KEY}&number=100&addRecipeInformation=true`;
        const apiRecipes = await axios.get(apiUrl);
        // console.log(apiRecipes.data);
        return await apiRecipes.data.results.map((item) => ({
            id: item.id,
            name: item.title,
            image: item.image,
            summaryDish: item.summary,
            healthScore: item.healthScore,
            stepByStep: item.analyzedInstructions.map(item=>item),
            diets: item.diets,
            createdInDB: false,
        }
        ));      
    } catch (error) {
        throw new Error ("There was an error with the information requested", error);
    }   
 
};


module.exports = { getApiInfo };