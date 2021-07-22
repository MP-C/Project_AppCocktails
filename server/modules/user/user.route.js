const userRouter = require('express').Router();

const {
  getAllUsers,
  // getOneUser,
  // createUser,
  // updateUser,
  // deleteUser,
} = require('./user.controller');

userRouter.get('/users', getAllUsers); // to be available for administration app and control about users - policy confidenciality
// userRouter.get('/users/:userId', getOneUser); // to be available for users app and users get theirs own self infp - policy confidenciality
// userRouter.post('/users', createUser); // to be available for users app and user create an account him self - policy confidenciality
// userRouter.put('/users/:userId', updateUser); // to be available for users app and control about users - policy confidenciality
// userRouter.delete('/users/:userId', deleteUser); // to be available for administration app and control about users - policy confidenciality

module.exports = userRouter;
