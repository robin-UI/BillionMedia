const express = require('express');
const router = express.Router();
const controller = require('../controller/userControl');
const { fetchUser } = require('../middleware/fetchUser')
const {
  validatorRequestSchema,
  creaateUserSchema,
  loginSchema
} = require('../middleware/validatorRequestSchema');


/* POST : Create user. */
router.post('/signup',
  creaateUserSchema,
  validatorRequestSchema,
  controller.createAccount
)

/* POST : Login user. */
router.post('/login',
  loginSchema,
  validatorRequestSchema,
  controller.loginAccount
)

/* POST : Fetch user. */
router.get('/fetchUser/',
  fetchUser,
  controller.showUserDetails
)

/* PATCH : Edit user. */
router.patch('/editUser',
  fetchUser,
  controller.editUser
)

/* DELETE : Fetch user. */
router.delete('/deleteUser',
  fetchUser,
  controller.deleteUser
);

module.exports = router;
