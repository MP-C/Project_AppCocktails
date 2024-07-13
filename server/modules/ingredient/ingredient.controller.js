const {
  checkExistingUser, //  se necessario confirmar então verificar com o User file
  checkExistingIngredient,
  findMany,
  findOne,
  create,
  update,
  remove,
} = require('./ingredient.model');

// Retrieve all Cocktails
const getAllIngredient = async (req, res) => {
  try {
    const rawData = await findMany();
    res.json(rawData[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Retrieve one Ingredient
const getOneIngredient = async (req, res) => {
  try {
    const existingUser = await checkExistingUser(req.params.userId);
    if (existingUser.length === 0) {
      res.status(404).send(`This user doesn't existe with this id.`);
    } else {
      const rawData = await findOne(req.params.userId);
      res.json(rawData);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Create a new Ingredient
const createIngredient = async (req, res) => {
  try {
    const existingIngredient = await checkExistingIngredient(
      req.body.ingredient
    );
    if (existingIngredient.length > 0) {
      res.status(409).send(`This Ingredient existe already.`);
    } else {
      const rawData = await create(req.body);
      res.status(201).json(rawData);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

// Update existing Ingredient
const updateIngredient = async (req, res) => {
  try {
    const existingIngredient = await checkExistingIngredient(
      req.params.ingredientId
    );
    if (existingIngredient.length === 0) {
      res.status(404).send(`This Ingredient doesn't existe with this id.`);
    } else {
      const rawData = await update(req.params.cocktailId, req.body);
      res.status(200).json(rawData);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Delete existing Ingredient
const deleteIngredient = async (req, res) => {
  try {
    const existingIngredient = await checkExistingIngredient(
      req.params.ingredientId
    );
    if (existingIngredient.length === 0) {
      res.status(404).send(`This Ingredient doesn't existe with this id.`);
    } else {
      const rawData = await remove(req.params.ingredientId);
      res.status(200).send('Your Ingredient will be disable int a few days.');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllIngredient,
  getOneIngredient,
  createIngredient,
  updateIngredient,
  deleteIngredient,
};
