require("dotenv").config();
const express = require("express");
const router = new express.Router();
const { getDiets } = require('../controllers/diet.controller');



router.get("/", async (req, res) => { //defines a GET endpoint '/' with Express which responds to requests by executing the getDiets() and then sending the resulting array of diet objects as a response
    try {
        // const allDiets = await putDietInfo ();
        const allDiets = await getDiets();
        res.status(200).send(allDiets)
    } catch (error) {
        res.status(404).json({message:error.message});
    }
})

// router.get('/', async (req, res)=>{
//     const diets = [];
//     try {
//         const apiUrl = `${API_HOST}?apiKey=${API_KEY}&number=100&addRecipeInformation=true`;
//         const dietsApi = await axios.get(apiUrl);
//         if (diets){
//             const totalDiets = await dietsApi.filter(item=> item?.diets.includes(item))
//         }
//         const diets = dietsApi.data.map ((item) => item.diets)
//         console.log(dietsApi);
//         // const dietEach = diets.map((item) =>{
//         //     for (let i=0; i<item.length; i++) return item[i]
//         // })

//         // console.log(dietEach);

//         dietEach.forEach((item) => {
//             diets.findOrCreate({
//                 where: {name: item}
//             })
//         })
//         const allDiets = await diets.findAll();
//         res.send(allDiets);
//     } catch (error) {
//         return res.status(400).json(error.message)
//     }
// })


module.exports = router;

