'use strict';

const { labSchema, LABS_TABLE } = require("./../models/labs.model");
const { LOCATIONS_TABLE, LocationSchema } = require("./../models/locations.model");
const { PERFILES_TABLES, PerfilSchema  } = require("./../models/perfiles.models");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(LABS_TABLE, labSchema);
    await queryInterface.createTable(PERFILES_TABLES, PerfilSchema);
    await queryInterface.createTable(LOCATIONS_TABLE, LocationSchema);

    //await queryInterface.createTable(PERFILES_TABLE, 'image', labSchema.image); <- organizar en una nueva migración
  },

  down: async (queryInterface) => {
    await queryInterface.drop(LABS_TABLE);
    await queryInterface.drop(PERFILES_TABLES);
    await queryInterface.drop(LOCATIONS_TABLE);

    //await queryInterface.removeColumn(USER_TABLE, 'role') <- esto igual va en la nueva migración
  }
};
