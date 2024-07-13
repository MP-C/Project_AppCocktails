// const Joi = require('joi');

const {
  checkExistingUser,
  checkExistingEmail,
  findMany,
  findOne,
  create,
  update,
  remove,
} = require('./user.model');

// Retrieve all user
const getAllUsers = async (req, res) => {
  try {
    const rawData = await findMany();
    return res.json(rawData[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

/*
// Validation of fields to create a new user or to update user's datas
const validate = (data) =>
  Joi.object({
    email: Joi.string().email(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
    lastname: Joi.string().alphanum(),
    firstname: Joi.string().alphanum(),
    birthday: Joi.date().raw().required(),
  }).validate(data, { abortEarly: false }).error;
*/

// Retrieve one user
const getOneUser = async (req, res) => {
  try {
    const existingUser = await checkExistingUser(req.params.userId);
    if (existingUser.length === 0) {
      res.status(404).send(`This user doesn't existe with this id.`);
    } else {
      const rawData = await findOne(req.params.userId);
      res.json(rawData[0]);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Create a new user
const createUser = async (req, res) => {
  try {
    const existingEmail = await checkExistingEmail(req.body.email);
    if (existingEmail.length > 0) {
      res.status(409).send(`This email or password is already.`);
    } else {
      const rawData = await create(req.body);
      res.status(201).json(rawData);
    }
  } catch (err) {
    // console.log(err);
    res.status(500).send(err);
  }
};

// Update existing user's datas
const updateUser = async (req, res) => {
  try {
    const existingUser = await checkExistingUser(req.params.userId);
    if (existingUser.length === 0) {
      res.status(404).send(`This user doesn't existe with this id.`);
    } else {
      const rawData = await update(req.params.userId, req.body);
      res.status(200).json(rawData);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Delete existing User
const deleteUser = async (req, res) => {
  try {
    const existingUser = await checkExistingUser(req.params.userId);
    if (existingUser.length === 0) {
      res.status(404).send(`This user doesn't existe with this id.`);
    } else {
      // eslint-disable-next-line no-unused-vars
      const rawData = await remove(req.params.userId);
      res.status(200).send('Your account will be disable int a few days.');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
