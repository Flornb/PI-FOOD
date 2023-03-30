const { Diet } = require('../db.js');
const axios = require ('axios');
const { API_KEY, API_HOST } = process.env;

//get diets from api 
const getDiets = async () => {
    const apiUrl = `${API_HOST}?apiKey=${API_KEY}&number=100&addRecipeInformation=true`;
    const response = await axios.get(apiUrl);
    const {results} = response.data
    
    const apiDiets = await results.map (item => item.diets)

    for (let i = 0; i < apiDiets.length; i++){
        const diets = apiDiets[i]
        diets.forEach (async (item) => {
            await Diet.findOrCreate({ //find the diet, if there is no diet creates a new one
                where:{
                    name:item,
                }
            })
        });
    }
    const allDiets = await Diet.findAll();
    return allDiets;
}

// const putDietInfo = async () => {
//     const dietTypes = [
//         "gluten free",
//         "dairy free",
//         "lacto ovo vegetarian",
//         "vegan",
//         "paleolithic",
//         "primal",
//         "pescatarian",
//         "fodmap friendly",
//         "whole 30",
//     ];
//     dietTypes.forEach((d) => {
//         Diet.findOrCreate({
//             where: {
//                 name: d,
//             }
//         })
//     })
//     return Diet.findAll();

// }


module.exports = { getDiets };
// const dietTypes = [ // array that contains the list of diets that need to be added to the database
// "gluten free",
// "dairy free",
// "lacto ovo vegetarian",
// "vegan",
// "paleolithic",
// "primal",
// "pescatarian",
// "fodmap friendly",
// "whole 30",
// ];
// dietTypes.forEach((item) => { // loop is used to iterate over each item in the dietTypes array, and create a new Diet object in the database with the properties name and description
// Diet.findOrCreate({ //create a new entry if it doesn't already exist
//     where: {
//         name: item,
//     }
// })
// })
// return Diet.findAll();