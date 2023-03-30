// require("dotenv").config();
// const { API_KEY, API_HOST } = process.env;
// const axios = require ("axios");
const { Recipe, Diet } = require('../db');


//get info from DataBase by name
const getDBInfo = async (name) =>{
    try {
        if(name) {
            return await Recipe.findAll({
                include:{
                    model: Diet,             //must bring the recipe with corresponding diet
                    attributes: ['id','name'],
                    through: {              //bring from attributes 
                        attributes: [],
                    },
                },
            })  
        }    
    }catch (error) {
        throw new Error('There was an error with data in db', error)
    }
}
//look for db information by id
const getIdDBInfo = async (id) => {
    try {
        return await Recipe.findByPk(id);
    }catch (error) {
      throw new Error('There was an error with data', error)
    }
  };
 

module.exports = { getDBInfo, getIdDBInfo };