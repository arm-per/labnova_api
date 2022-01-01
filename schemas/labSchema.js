const joi = require("joi");

const id = joi.number();
const name = joi.string().min(5);
const price = joi.number().integer().min(0);
const description = joi.string().min(20);

const limit = joi.number().integer();
const offset = joi.number().integer();

const createLabSchema = joi.object({
  id: id,
  name: name.required(),
  price: price.required(),
  description: description
})

const updateLabSchema = joi.object({
  name: name,
  price: price,
  description: description
})

const getLabSchema = joi.object({
  id: id.required(),
})

const deleteLabSchema = joi.object({
  id: id.required(),
})

const queryLabSchema = joi.object({
  limit,
  offset
})

module.exports = { createLabSchema, updateLabSchema, getLabSchema, deleteLabSchema, queryLabSchema }
