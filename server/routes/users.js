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

/* PUT : Follow user. */
router.put('/follow',
  fetchUser,
  controller.followUser
)

/* PUT : UnFollow user. */
router.delete('/unfollow',
  fetchUser,
  controller.unfollow
)

/* PUT : Accept Follow Request user. */
router.put('/acceptfollowrequest',
  fetchUser,
  controller.acceptFollowrequest
)

/* DELETE : Reject Follow request user. */
router.delete('/rejectfollowrequest',
  fetchUser,
  controller.rejectFollowRequest
)

/* DELETE : Reject Follower request user. */
router.delete('/canclefollowerequest',
  fetchUser,
  controller.cancleFollowerRequest
)



module.exports = router;
