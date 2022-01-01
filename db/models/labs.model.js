const {Model, DataTypes, Sequelize} = require('sequelize');

const LABS_TABLE = 'labs';

const labSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: true,
    type: DataTypes.STRING
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
}

class Lab extends Model {
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: LABS_TABLE,
      modelName: 'labs',
      timestamps: false
    }
  }
}

module.exports = {LABS_TABLE, labSchema, Lab}
