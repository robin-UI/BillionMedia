const Post = require("../model/Post");
const User = require("../model/User")

module.exports = {
    createPost : async (req, res) => {
        console.log(req.files);
        const newPost = new Post(req.body);
        try {
            const savedPost = await newPost.save();
            res.status(200).json(savedPost);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    updatePost : async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);
            if (post.userId === req.body.userId) {
                await post.updateOne({ $set: req.body });
                res.status(200).json("the post has been updated");
            } else {
                res.status(403).json("you can update only your post");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    deletePost : async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);
            if (post.userId === req.body.userId) {
                await post.deleteOne();
                res.status(200).json("the post has been deleted");
            } else {
                res.status(403).json("you can delete only your post");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    likeDislikes : async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);
            if (!post.likes.includes(req.body.userId)) {
                await post.updateOne({ $push: { likes: req.body.userId } });
                res.status(200).json("The post has been liked");
            } else {
                await post.updateOne({ $pull: { likes: req.body.userId } });
                res.status(200).json("The post has been disliked");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    showPost : async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);
            res.status(200).json(post);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    showAllPost : async (req, res) => {
        try {
            const currentUser = await User.findById(req.params.userId);
            
            const userPosts = await Post.find({ userId: currentUser._id });
            const friendPosts = await Promise.all(
                currentUser.following.map((friendId) => {
                    return Post.find({ userId: friendId });
                })
            );
            res.status(200).json(userPosts.concat(...friendPosts)) 
        } catch (err) {
            res.status(500).json(err);
        }
    },
}