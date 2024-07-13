const userRouter = require('./modules/user/user.route');
const cocktailRouter = require('./modules/cocktail/cocktail.route');
const ingredientRouter = require('./modules/ingredient/ingredient.route');
const favoriteRouter = require('./modules/favorite/favorite.route');
// const stockRouter = require('./modules/stock/stocks.route');

module.exports = (app) => {
  app.use('/api', userRouter);
  app.use('/api', cocktailRouter);
  app.use('/api', ingredientRouter);
  app.use('/api', favoriteRouter);
  // app.use('/api', stockRouter);
};