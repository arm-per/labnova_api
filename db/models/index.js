const { Lab, labSchema } = require('./labs.model');
const { Location, LocationSchema } = require('./locations.model');
const { Perfil, PerfilSchema } = require("./perfiles.models")

function setUpModels(sequelize){
  Lab.init(labSchema, Lab.config(sequelize));
  Location.init(LocationSchema, Location.config(sequelize));
  Perfil.init(PerfilSchema, Perfil.config(sequelize));
}

module.exports = setUpModels;
