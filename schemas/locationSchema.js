const joi = require("joi");

const id = joi.number();
const name = joi.string().min(4);
const streetName = joi.string();
const neighborhood = joi.string();
const streetNumber = joi.string().max(10);
const intNumber = joi.string().max(10);
const city = joi.string();
const state = joi.string().min(2).max(4);
const zipCode = joi.number();
const phone = joi.string();
const open = joi.string();
const close = joi.string();
const sunday = joi.bool();
const sundayOpen = joi.string();
const sundayClose = joi.string();
const place = joi.bool();
const placeName = joi.string().max(20);

const createLocationSchema = joi.object({
  id: id,
  name: name.required(),
  streetName: streetName.required(),
  neighborhood: neighborhood.required(),
  streetNumber: streetNumber.required(),
  intNumber: intNumber,
  city: city.required().default('Durango'),
  state: state.required().default('Durango'),
  zipCode: zipCode,
  phone: phone.default("618 811 72 30"),
  open: open.required(),
  close: close.required(),
  sunday: sunday.default(false),
  sundayOpen: sundayOpen,
  sundayClose: sundayClose,
  place: place.default(false),
  placeName: placeName,
})

const updateLocationSchema = joi.object({
  name: name,
  streetName: streetName,
  neighborhood: neighborhood,
  streetNumber: streetNumber,
  intNumber: intNumber,
  city: city.default('Durango'),
  state: state.default('Durango'),
  zipCode: zipCode,
  phone: phone.default("618 811 72 30"),
  open: open,
  close: close,
  sunday: sunday.default(false),
  sundayOpen: sundayOpen,
  sundayClose: sundayClose,
  place: place.default(false),
  placeName: placeName,
})

const getLocationSchema = joi.object({
  id: id.required(),
})

const deleteLocationSchema = joi.object({
  id: id.required(),
})

module.exports = {createLocationSchema, updateLocationSchema, getLocationSchema, deleteLocationSchema };
