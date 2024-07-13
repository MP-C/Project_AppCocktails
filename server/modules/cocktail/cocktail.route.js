const cocktailRouter = require('express').Router();

const {
  getAllCocktail,
  getOneCocktail,
  createCocktail,
  updateCocktail,
  deleteCocktail,
} = require('./cocktail.controller');

cocktailRouter.get('/users/:userId/cocktails', getAllCocktail);
cocktailRouter.get('/users/:userId/cocktails/:cocktailId', getOneCocktail);
cocktailRouter.post('/users/:userId/cocktails/', createCocktail);
cocktailRouter.put('/users/:userId/cocktails/:cocktailId', updateCocktail);
cocktailRouter.delete('/users/:userId/cocktails/:cocktailId', deleteCocktail);

module.exports = cocktailRouter;
