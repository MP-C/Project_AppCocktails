const ingredientsRouter = require('express').Router();

const {
  getAllIngredient,
  getOneIngredient,
  createIngredient,
  updateIngredient,
  deleteIngredient,
} = require('./ingredient.controller');

ingredientsRouter.get('/users/ingredients', getAllIngredient);
ingredientsRouter.get('/users/:userId/ingredients/:ingredientId', getOneIngredient);
ingredientsRouter.post('/users/:userId/ingredients/', createIngredient);
ingredientsRouter.put('/users/:userId/ingredients/:ingredientId', updateIngredient);
ingredientsRouter.delete(
  '/:userID/ingredients/:ingredientId',
  deleteIngredient
);

module.exports = ingredientsRouter;
