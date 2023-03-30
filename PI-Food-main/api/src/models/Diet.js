const { DataTypes } = require('sequelize');
// Exports a function who defines the model
// then we inyect the connection to sequelize.
module.exports = (sequelize) => {
  // define model
  sequelize.define('diet', {
  id:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    },
    {
      timestamps: false, 
    }
    );
};
