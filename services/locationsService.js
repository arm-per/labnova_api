const generateUUID = require("./../Helper/IDgenerator");
const boom = require("@hapi/boom")
const { models } = require("./../libs/squelize");

class LocationsService {
  constructor() {
    this.locations = []
  }

  async create (data) {
    return await models.locations.create(data);
  }

  async find () {
    return await models.locations.findAll();
  }

  async findOne (id) {
    const location = await models.locations.findByPk(id);
    if(!location){
      throw boom.notFound("Location not found")
    }
    return location;
  }

  async update (id, changes) {
   const location = await this.findOne(id);
   const rta = await location.update(changes);
   return rta;
  }


  async delete (id) {
    const location = await this.findOne(id);
    await location.destroy()

    return { id }
  }
}

module.exports = LocationsService;
