const favoritesRouter = require('express').Router();

const {
  getAllFavorite,
  // getOnefavorite,
  // createFavorite,
  updateFavorite,
  // deleteFavorite,
} = require('./favorite.controller');

favoritesRouter.get('/users/favorites', getAllFavorite);
// favoritesRouter.get('/users/:userId/favorites/:favoriteId', getOneFavorite);
// favoritesRouter.post('/users/:userId/favorites/', createFavorite);
favoritesRouter.put('/users/:userId/favorites/:favoriteId', updateFavorite);
// favoritesRouter.delete( '/users/:userId/favorites/:favoriteId', deleteFavorite );

module.exports = favoritesRouter;
