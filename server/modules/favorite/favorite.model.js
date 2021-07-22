const db = require('../../dbConfig');
/*
// function to check if an favorites already exists
const checkExistingUser = async (userId) => {
  try {
    const result = await db.query('SELECT id FROM `user` WHERE id = ?', userId);
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};
*/

// function to check if a user have a favorite cocktail
const findMany = async () => {
  try {
    return await db.query('SELECT * FROM ingredient');
  } catch (err) {
    throw new Error(err);
  }
};

// function to check if an favorites already exists
const checkExistingFavorite = async (userId, cocktailId) => {
  try {
    const result = await db.query(
      'SELECT id FROM `favorite` WHERE userId = ? AND cocktailId = ?',
      [userId, cocktailId]
    );
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to create a new favorites
const create = async () => {
  const { userId, cocktailId } = newfavorite;
  try {
    const [insertFavorite] = await db.query(
      'INSERT INTO favorite (userId, cocktailId, isFavorite) VALUES (?, ?, true)',
      [userId, cocktailId]
    );
    return insertFavorite;
  } catch (err) {
    throw new Error(err);
  }
};

// function to check if an favorites already exists
const checkExistingFavoriteTrue = async (userId, cocktailId) => {
  try {
    const result = await db.query(
      'SELECT isFavorite FROM `favorite` WHERE userId=? AND cocktailId=?',
      [userId, cocktailId]
    );
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to update a favorite State to TRUE
const favoriteNegative = async (userId, cocktailId) => {
  try {
    await db.query(
      'UPDATE favorite SET isFavorite=true WHERE userId=? AND cocktailId=?',
      [userId, cocktailId]
    );
    // return result;
  } catch (err) {
    throw new Error(err);
  }
};

// function to update a favorite State to FALSE
const favoritePositive = async (userId, cocktailId) => {
  try {
    await db.query(
      'UPDATE favorite SET isFavorite=false WHERE userId=? AND cocktailId=?',
      [userId, cocktailId]
    );
    // return result;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  // checkExistingUser,
  checkExistingFavorite,
  checkExistingFavoriteTrue,
  favoriteNegative,
  favoritePositive,
  findMany,
  create,
  // update,
};
