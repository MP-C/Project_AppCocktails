const {
  //  checkExistingUser,
  checkExistingFavorite,
  checkExistingFavoriteTrue,
  favoriteNegative,
  favoritePositive,
  findMany,
  create,
} = require('./favorite.model');

// Retrieve all favorites
const getAllFavorite = async (req, res) => {
  try {
    const rawData = await findMany();
    res.json(rawData[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update existing favorites and creat if necessary
const updateFavorite = async (req, res) => {
  try {
    const existingfavorite = await checkExistingFavorite(req.params.favoriteId);
    if (existingfavorite.length === 0) {
      // in case of no exist
      const rawData = await create(req.body);
      res.status(201).json(rawData);
    } else {
      // If exist, update the state into false, or true
      const existingfavoriteTrue = await checkExistingFavoriteTrue(req.body);
      if (existingfavoriteTrue === true) {
        const rawData = await favoriteNegative(req.body);
        res.status(201).json(rawData);
      } else {
        const rawData = await favoritePositive(req.body);
        res.status(201).json(rawData);
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = {
  getAllFavorite,
  updateFavorite,
};
