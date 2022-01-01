const generateUUID = require("./../Helper/IDgenerator");
const boom = require("@hapi/boom");
const { models } = require("./../libs/squelize");

class PerfilesService {

  constructor() {
    this.perfiles = [];
  }

  async create (data) {
    return await models.perfiles.create(data);
  }

  async find () {
    return await models.perfiles.findAll();
  }

  async findOne (id) {
    const perfil = await models.perfiles.findByPk(id);
    if(!perfil){
      throw boom.notFound('Perfil no encontrado');
    }
    return perfil;
  }

  async update (id, changes) {
    const perfil = await this.findOne(id);
    const rta = await perfil.update(changes);
    return rta;
  }

  async delete (id) {
   const perfil = await this.findOne(id);
   await perfil.destroy();
   return { id }
  }
}

module.exports = PerfilesService;
