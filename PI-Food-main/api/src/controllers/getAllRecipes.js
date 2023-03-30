const { getApiInfo } = require('./getApiInfo');
const { getDBInfo } = require('./getDBInfo');
// const axios = require ("axios");
  
  //bring all (api info and db info)
   const getAllRecipes = async () =>{ //uses await to essentially wait for both getApiInfo() and getDBInfo() to return their data before concatenating them together and returning the result.
    try {
      const apiInfo = await getApiInfo();
      const dbInfo = await getDBInfo();
      const totalInfo = apiInfo.concat(dbInfo); //concat both api and db, this way we can work with all in one. 
      return totalInfo;
    } catch (error) {
      console.log(error);
      throw new Error('There was an error while fetching recipes', error)
    }
};

module.exports = {getAllRecipes};