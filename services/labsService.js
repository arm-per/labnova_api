//const generateUUID = require("./../Helper/IDgenerator");
const boom = require("@hapi/boom");
const { models } = require("./../libs/squelize");

class LabsService {

  constructor() {
    this.labs = []

  }


  async create(data) {
    return await models.labs.create(data);
  }

  async find(query) {
    const options = {

    };
    const {limit, offset} = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }
    return await models.labs.findAll(options);
  }

  async findOne(id) {
    const lab = await models.labs.findByPk(id);
    if(!lab){
      throw boom.notFound('Estudio no encontrado')
    }
    return lab;
  }

  async update(id, changes) {
    const lab = await this.findOne(id)
    const rta = await lab.update(changes);
    return rta;
  }

  async delete(id) {
    const lab = await this.findOne(id)
    await lab.destroy()
    return {id};
  }

}

module.exports = LabsService;
