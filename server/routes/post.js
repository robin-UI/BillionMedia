const express = require('express');
const router = express.Router();
const controller = require('../controller/postController');
const { fetchUser } = require('../middleware/fetchUser')

//create a post
router.post(
    "/newPost", 
    fetchUser,
    controller.createPost,
);

//update a post
router.put(
    "/:id",
    controller.updatePost
);

//delete a post
router.delete(
    "/:id",
    controller.deletePost
);

//like / dislike a post
router.put(
    "/:id/like",
    controller.likeDislikes
 );

//get a post
router.get( 
    "/:id",
    controller.showPost
);

//get timeline posts
router.get(
    "/timeline/all",
    controller.showAllPost
);


module.exports = router;