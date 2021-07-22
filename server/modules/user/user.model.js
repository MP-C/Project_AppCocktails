const db = require('../../dbConfig');

// function to check if user already exists
const checkExistingUser = async (userId) => {
  try {
    const result = await db.query('SELECT id FROM `user` WHERE id = ?', userId);
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to check if email already exists
const checkExistingEmail = async (email) => {
  try {
    const result = await db.query('SELECT email FROM `user` WHERE email = ?', [
      email,
    ]);
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

// function to retrieve all users
const findMany = async () => {
  try {
    const users = await db.query('SELECT * FROM `user`');
    return users;
  } catch (err) {
    throw new Error(err);
  }
};

// function to retrieve one user
const findOne = async (userId) => {
  try {
    return await db.query('SELECT * FROM user WHERE id = ?', [userId]);
  } catch (err) {
    throw new Error(err);
  }
};

// function to create a new user
const create = async (newUser) => {
  const { email, password, lastname, firstname, birthday } = newUser;

  try {
    const [insertUser] = await db.query(
      'INSERT INTO user (email, password, lastname, firstname, birthday) VALUES (?, ?, ?, ?, ?)',
      [email, password, lastname, firstname, birthday]
    );
    return insertUser;
  } catch (err) {
    throw new Error(err);
  }
};

// function to update a user
const update = async (userId, updatedInfo) => {
  try {
    await db.query('UPDATE user SET ? WHERE id = ?', [updatedInfo, userId]);
    return updatedInfo;
  } catch (err) {
    throw new Error(err);
  }
};

// function to delete all user's info
const remove = async (userId) => {
  try {
    await db.query('DELETE FROM user WHERE id = ?', [userId]);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  checkExistingUser,
  checkExistingEmail,
  findMany,
  findOne,
  create,
  update,
  remove,
};
