const {
  checkExistingUser,
  checkExistingCocktail,
  findMany,
  // findOne,
  // create,
  // update,
  // remove,
} = require('./cocktail.model');

/*
// Validation of fields to create a new Cocktail or to update Cocktail's datas
const validate = (data) =>
  Joi.object({
    cocktailName: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
    glass: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
    isAlcoholic: Joi.boolean(),
    description: Joi.string().alphanum(),
    ingredient: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
    recipe: Joi.string().alphanum(),
    vote: Joi.string().alphanum(),
    tags: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
  }).validate(data, { abortEarly: false }).error;
*/

// Retrieve all Cocktails
const getAllCocktail = async (req, res) => {
  try {
    const rawData = await findMany();
    res.json(rawData);
  } catch (err) {
    res.status(500).send(err);
  }
};

/*
// Retrieve one Cocktail
const getOneCocktail = async (req, res) => {
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

// Create a new Cocktail
const createCocktail = async (req, res) => {
  try {
    const existingCocktail = await checkExistingCocktail(req.body.cocktail);
    if (existingCocktail.length > 0) {
      res.status(409).send(`This Cocktail existe already.`);
    } else {
      const rawData = await create(req.body);
      res.status(201).json(rawData);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

// Update existing cocktail
const updateCocktail = async (req, res) => {
  try {
    const existingCocktail = await checkExistingCocktail(req.params.cocktailId);
    if (existingCocktail.length === 0) {
      res.status(404).send(`This Cocktail doesn't existe with this id.`);
    } else {
      const rawData = await update(req.params.cocktailId, req.body);
      res.status(200).json(rawData);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Delete existing Cocktail
const deleteCocktail = async (req, res) => {
  try {
    const existingCocktail = await checkExistingCocktail(req.params.cocktailId);
    if (existingCocktail.length === 0) {
      res.status(404).send(`This Cocktail doesn't existe with this id.`);
    } else {
      const rawData = await remove(req.params.cocktailId);
      res.status(200).send('Your Cocktail will be disable int a few days.');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
*/
module.exports = {
  getAllCocktail,
  // getOneCocktail,
  // createCocktail,
  // updateCocktail,
  // deleteCocktail,
};
