const db = require('../../dbConfig');

// function to check if an ingredient already exists
const checkExistingUser = async (userId) => {
  try {
    const result = await db.query('SELECT id FROM `user` WHERE id = ?', userId);
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to check if an ingredient already exists
const checkExistingIngredient = async (ingredientName) => {
  try {
    const result = await db.query(
      'SELECT * FROM `ingredient` WHERE ingredientName=?',
      ingredientName
    );
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to retrieve all ingredients
const findMany = async () => {
  try {
    return await db.query('SELECT * FROM ingredient');
  } catch (err) {
    throw new Error(err);
  }
};

// function to retrieve one ingredient
const findOne = async (ingredientId) => {
  try {
    return await db.query('SELECT * FROM ingredient WHERE id = ?', [
      ingredientId,
    ]);
  } catch (err) {
    throw new Error(err);
  }
};

// function to create a new user
const create = async (newIngredient) => {
  const { ingredientName, category, rare } = newIngredient;
  try {
    const [insertIngredient] = await db.query(
      'INSERT INTO ingredient (ingredientName, category, rare) VALUES (?, ?, ?)',
      [ingredientName, category, rare]
    );
    return insertIngredient;
  } catch (err) {
    throw new Error(err);
  }
};

// function to update a user
const update = async (ingredientId, updatedInfo) => {
  try {
    await db.query('UPDATE ingredient SET ? WHERE id = ?', [
      updatedInfo,
      ingredientId,
    ]);
    return updatedInfo;
  } catch (err) {
    throw new Error(err);
  }
};

// function to delete all user's info
const remove = async (ingredientId) => {
  try {
    await db.query('DELETE FROM ingredient WHERE id = ?', [ingredientId]);
  } catch (err) {
    throw new Error(err);
  }
};
module.exports = {
  checkExistingUser,
  checkExistingIngredient,
  findMany,
  findOne,
  create,
  update,
  remove,
};
