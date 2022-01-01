const express = require("express");
const router = express.Router();
const LocationService = require("./../services/locationsService");
const service = new LocationService();
const validatorHandler = require("./../middleware/validatorHandler");
const {createLocationSchema, deleteLocationSchema, getLocationSchema, updateLocationSchema} = require("./../schemas/locationSchema")

router.get("/", async (req, res,next) => {
  try{
    const locations = await service.find();
    res.json(locations)
  }catch (error) {
    next(error)
  }
})

router.get("/:id",
  validatorHandler(getLocationSchema),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const location = await service.findOne(id);
      res.json(location)
    }catch (error) {
      next(error)
    }
})

router.post("/",
  validatorHandler(createLocationSchema),
  async (req, res,next) => {
    try{
      const data = req.body;
      const newLocation = await service.create(data);
      res.json(newLocation);
    }catch (error) {
     next(error)
    }
})

router.patch("/:id",
  validatorHandler(getLocationSchema),
  validatorHandler(updateLocationSchema),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const changes = req.body;
      const location = await service.update(id, changes);
      res.json(location);
    }catch (error){
      next(error)
    }
})

router.delete("/:id",
  validatorHandler(deleteLocationSchema),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const deleted = await service.delete(id);
      res.json(deleted);
    }catch (error) {
      next(error)
    }
})

module.exports = router;
