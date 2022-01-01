const { Model, DataTypes, Sequelize } = require('sequelize');

const LOCATIONS_TABLE = 'locations';

const LocationSchema = {
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
  streetName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'street_name',
  },
  neighborhood: {
    allowNull: false,
    type: DataTypes.STRING
  },
  streetNumber: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'street_number'
  },
  intNumber: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'int_number'
  },
  city: {
    allowNull: false,
    type: DataTypes.STRING,
    default: 'Durango',
  },
  state: {
    allowNull: false,
    type: DataTypes.STRING,
    default: 'DGO',
  },
  zipCode: {
    allowNull: true,
    type: DataTypes.STRING,
    filed: 'zip_code'
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING
  },
  open: {
    allowNull: false,
    type: DataTypes.STRING
  },
  close: {
    allowNull: false,
    type: DataTypes.STRING
  },
  sunday: {
    allowNull: true,
    type: DataTypes.BOOLEAN
  },
  sundayOpen: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'sunday_open'
  },
  sundayClose: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'sunday_close'
  },
  place: {
    allowNull: true,
    type: DataTypes.BOOLEAN,
    default: false,
  },
  placeName: {
    allowNull: true,
    type: DataTypes.STRING
  }
}

class Location extends Model {
  static  associate() {

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: LOCATIONS_TABLE,
      modelName: 'locations',
      timestamps: false
    }
  }
}

module.exports = { LOCATIONS_TABLE, LocationSchema, Location }
