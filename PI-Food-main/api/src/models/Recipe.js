const { DataTypes } = require('sequelize');
// Exports a function who defines the model
// then we inyect the connection to sequelize.
module.exports = (sequelize) => {
  // define model
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID, //Universal Unique IDentifier to guarantee the uniqueness of each id
      defaultValue: DataTypes.UUIDV4, //used to generate a random UUID each time a new record is created in the table.
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    summaryDish:{
      type: DataTypes.STRING,
    },
    healthScore:{
      type: DataTypes.INTEGER, //diet types
      allowNull: false,
    },
    stepByStep:{
      type: DataTypes.STRING,
      allowNull: false,
    },
     //access only to info in our db and all data created is seted with this property
    createInDb: {  
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  },
    {
      timestamps: false, 
    });
};
