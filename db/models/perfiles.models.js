const { Model, DataTypes, Sequelize } = require("sequelize");

const PERFILES_TABLES = 'perfiles';

const PerfilSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  labs: {
    allowNull: false,
    type: DataTypes.JSON,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  regularPrice: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: 'regular_price'
  },
  description: {
    allowNull: true,
    type: DataTypes.STRING,
  }
}

class Perfil extends Model {
  static associate(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: PERFILES_TABLES,
      modelName: 'perfiles',
      timestamps: false
    }
  }
}

module.exports = {PERFILES_TABLES, PerfilSchema, Perfil}
