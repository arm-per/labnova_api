const express = require("express");
const router = express.Router();
const PerfilService = require("./../services/perfilesService");
const service = new PerfilService();
const validatorHandler = require("./../middleware/validatorHandler");
const {deletePerfilSchema, getPerfilSchema, updatePerfilSchema, createPerfilSchema} = require("./../schemas/perfilSchema")

router.get("/", async (req, res,next) => {
  try{
    const perfiles = await service.find();
    res.json(perfiles)
  }catch (error) {
    next(error)
  }
})

router.get("/:id",
  validatorHandler(getPerfilSchema),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const perfil = await service.findOne(id);
      res.json(perfil)
    }catch (error){
      next(error)
    }
})

router.post("/",
  validatorHandler(createPerfilSchema),
  async (req, res, next) => {
  try{
    const data = req.body;
    const newPerfil = await service.create(data);
    res.json(newPerfil)
  }catch (error) {
    next(error)
  }
})

router.patch("/:id",
  validatorHandler(getPerfilSchema),
  validatorHandler(updatePerfilSchema),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const data = req.body;
      const perfil = await service.update(id, data);
      res.json(perfil)
    }catch (error){
      next(error)
    }
})

router.delete("/:id",
  validatorHandler(deletePerfilSchema),
  async (req, res, next) => {
  try{
    const { id } = req.params;
    const perfil = await service.delete(id);
    res.json(perfil)
  }catch (error) {
    next(error)
  }
})

module.exports = router;
