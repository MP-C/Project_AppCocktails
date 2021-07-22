const db = require('../../dbConfig');

// function to check if user already exists
const checkExistingUser = async (userId) => {
  try {
    const result = await db.query('SELECT id FROM user WHERE id = ?', userId);
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to check if cocktail already exists
const checkExistingCocktail = async (cocktailId) => {
  try {
    const result = await db.query(
      'SELECT id FROM `cocktail` WHERE cocktail.id=?',
      [cocktailId]
    );
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to retrieve all cocktails
const findMany = async () => {
  try {
    const result = await db.query('SELECT * FROM cocktail');
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to retrieve one cocktail
const findOne = async (cocktailId) => {
  try {
    const result = await db.query(
      'SELECT * FROM cocktail WHERE cocktail.id = ?',
      [cocktailId]
    );
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to create a new cocktail
const create = async (newCocktail) => {
  const {
    userId,
    cocktailName,
    glass,
    isAlcoholic,
    description,
    ingredient,
    recipe,
    vote,
    tags,
  } = newCocktail;

  try {
    const [insertCocktail] = await db.query(
      'INSERT INTO cocktail (userId, cocktailName, glass, isAlcoholic, description, ingredient, recipe, vote, tags) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        userId,
        cocktailName,
        glass,
        isAlcoholic,
        description,
        ingredient,
        recipe,
        vote,
        tags,
      ]
    );
    return insertCocktail;
  } catch (err) {
    throw new Error(err);
  }
};

// function to update a Cocktail
const update = async (cocktailId, updatedInfo) => {
  try {
    await db.query('UPDATE cocktail SET ? WHERE id = ?', [
      updatedInfo,
      cocktailId,
    ]);
    return updatedInfo;
  } catch (err) {
    throw new Error(err);
  }
};

// function to delete all user's info
const remove = async (cocktailId) => {
  try {
    await db.query('DELETE FROM cocktail WHERE id = ?', [cocktailId]);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  checkExistingUser,
  checkExistingCocktail,
  findMany,
  findOne,
  create,
  update,
  remove,
};
