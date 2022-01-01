const joi = require("joi");

const id = joi.string();
const labs = joi.object();
const name = joi.string().min(4).max(20);
const price = joi.number();
const regularPrice = joi.number();
const description = joi.string();

const createPerfilSchema = joi.object({
  id: id,
  labs: labs.required(),
  name: name.required(),
  price: price.required(),
  regularPrice: regularPrice,
  description: description,
})

const updatePerfilSchema = joi.object({
  id: id,
  labs: labs,
  name: name,
  price: price,
  regularPrice: regularPrice,
  description: description,
})

const getPerfilSchema = joi.object({
  id: id.required()
})

const deletePerfilSchema = joi.object({
  id: id.required()
})

module.exports = { createPerfilSchema, updatePerfilSchema, getPerfilSchema, deletePerfilSchema };
