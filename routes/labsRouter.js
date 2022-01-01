const express = require("express");
const router = express.Router();
const LabsService = require("./../services/labsService");
const service = new LabsService();
const validatorHandler = require("./../middleware/validatorHandler");
const { createLabSchema, deleteLabSchema, getLabSchema, updateLabSchema, queryLabSchema } = require("./../schemas/labSchema");

router.get("/",
  validatorHandler(queryLabSchema, 'query'),
  async (req, res, next) => {
    try{
      const labs = await service.find(req.query);
      res.json(labs);
    } catch (error){
      next(error)
    }
})

router.get("/:id",
  validatorHandler(getLabSchema, 'params'),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const lab = await service.findOne(id);
      res.json(lab);
    }catch (error){
      next(error)
    }
})

router.post("/",
  validatorHandler(createLabSchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const newLab = await service.create(body);
      res.json(newLab);
    }catch (error){
      next(error)
    }
})

router.patch("/:id",
  validatorHandler(getLabSchema, 'params'),
  validatorHandler(updateLabSchema, 'body'),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const body = req.body;
      const Lab = await service.update(id, body);
      res.json(Lab);
    }catch (error){
     next(error)
    }
})

router.delete("/:id",
  validatorHandler(deleteLabSchema, 'params'),
  async (req, res, next) => {
  try{
    const { id } = req.params;
    const deleteLab = await service.delete(id);
    res.json(deleteLab)
  }catch (error) {
    next(error)
  }
})

module.exports = router;
