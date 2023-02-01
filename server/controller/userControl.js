const User = require("../model/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SCRET = 'Robinisgood$oy'

module.exports = {
    createAccount: async (req, res) => {
        let success = false;
        try {
            let username = await User.findOne({ username: req.body.username })
            let email = await User.findOne({ email: req.body.email })
            let number = await User.findOne({ number: req.body.number })

            if (username || email || number) {
                return res.status(400).json({
                    success: false,
                    message: "UserName, Email or Number already exists"
                });
            }

            const salt = await bcrypt.genSalt(10)
            const secPass = await bcrypt.hash(req.body.password, salt)

            //Create a new user
            let user = await User.create({
                username: req.body.username,
                name: req.body.name,
                email: req.body.email,
                number: req.body.number,
                password: secPass,
            })
            const data = {
                user: {
                    id: user.id
                }
            }
            const authTocken = jwt.sign(data, JWT_SCRET)

            success = true;
            res.json({ success, authTocken })

        } catch (error) {
            console.error(error.message)
            res.status(500).send("Some error occured")
        }

    },

    loginAccount: async (req, res) => {
        let success = false;
        try {
            let user = await User.findOne({ email: req.body.email })

            if (!user) {
                return res.json({ 
                    success: false, 
                    message: "You dosent exist hear" 
                })
            }

            const passwordCompair = await bcrypt.compare(req.body.password, user.password)
            if (!passwordCompair) {
                success = false;
                return res.status(400).json({ 
                    success, 
                    error: "Pleace login with correct credintials"
                });
            }

            const data = {
                user: {
                    id: user.id
                }
            }
            const authTocken = jwt.sign(data, JWT_SCRET)
            success = true;
            res.json({ success, authTocken })

        } catch (error) {
            console.error(error.message)
            res.status(500).send("Some error occured")
        }
    },

    showUserDetails: async (req, res) => {
        try {
            let userId = req.params.id;
            const user = await User.findById(userId).select("-passwords");
            const { password, updatedAt, ...other } = user._doc;
            res.status(200).send(other);
        } catch (error) {
            console.error(error.message)
            res.status(500).send("Some error this occured")
        }
    },

    editUser: async (req, res) => {
        try {
            userId = req.user.id;
            const user = await User.findOneAndUpdate(
                { _id: userId }, 
                req.body, 
                {
                    new: true,
                    runValidators: true,
                }
            )

            if (!user) {
                return res.status(400).json({ 
                    success: false, 
                    error: "Pleace login with correct credintials" 
                });
            }
            res.status(200).json({ user: user });

        } catch (error) {
            console.error(error.message)
            res.status(500).send("Some error this occured")
        }
    },

    deleteUser: async (req, res) => {
        try {
            let userId = req.user.id;
            if (req.body.userId === userId) {
                await User.findByIdAndDelete(userId);
                return res.status(200).json({
                    success: true,
                    message: "The user has been deleted"
                })
            } else {
                return res.status(400).json({
                    success: false,
                    message: "You do not have permission to delete this user"
                })
            }
        } catch (error) {
            console.error(error.message)
            res.status(500).send("Some error this occured")
        }
    },

    followUser: async (req, res) => {
        if (req.user.id !== req.body.userId) {
            try {
                const user = await User.findById(req.user.id)
                const currentUser = await User.findById(req.body.userId)
                if (!user.following.includes(req.body.userId)) {
                    
                    if(currentUser.isPriver) {
                        await user.updateOne({ $push: {followingRequest: req.body.userId}})
                        await currentUser.updateOne({ $push: {followersRequest: req.user.id}})
                        return  res.status(200).json({
                            success: true,
                            message: 'Your following is sended'
                        })
                    }else {
                        //If the following person is already send a follow request when
                        //the userAccount is private then remove the follow request
                        //and followindg request and put into follow and followindg
                        await user.updateOne({ $push: {following: req.body.userId}})
                        await currentUser.updateOne({ $push: {followers: req.user.id}})
                        return res.status(200).json({
                            success: true,
                            message: 'You are now following'
                        })
                    }

                } else {
                    res.status(403).json({
                        success: false,
                        message: 'You do not follow this user again'
                    });
                }
            } catch (error) {
                console.error(error.message)
                res.status(500).send("Some error this occured")
            }
        } else {
            return res.send(403).json({
                success: false,
                message: "you are not allowed to follow this user"
            });
        }
    },

    unfollow: async (req, res) => {
        if (req.user.id !== req.body.userId) {
            try {
                const user = await User.findById(req.user.id)
                const currentUser = await User.findById(req.body.userId)
                if (user.following.includes(req.body.userId)) {
                    
                    if(currentUser.isPriver) {
                        await user.updateOne({ $pull: {followersRequest: req.body.userId}})
                        await currentUser.updateOne({ $pull: {followingRequest: req.user.id}})
                        return  res.status(200).json({
                            success: true,
                            message: 'Your following is sended'
                        })
                    }else {
                        await user.updateOne({ $pull: {following: req.body.userId}})
                        await currentUser.updateOne({ $pull: {followers: req.user.id}})
                        return res.status(200).json({
                            success: true,
                            message: 'You are now following'
                        })
                    }

                } else {
                    res.status(403).json({
                        success: false,
                        message: 'You do not Unfollow this user'
                    });
                }
            } catch (error) {
                console.error(error.message)
                res.status(500).send("Some error this occured")
            }
        } else {
            return res.send(403).json({
                success: false,
                message: "you are not allowed to follow this user"
            });
        }
    },

    acceptFollowrequest: async (req, res) => {
        if(req.user.id !== req.body.userId){
            try {
                const user = await User.findById(req.user.id)
                const currentUser = await User.findById(req.body.userId)
                
                await user.updateOne({$pull: {followersRequest: req.body.userId}})
                await user.updateOne({$push: {followers: req.body.userId}})
                await currentUser.updateOne({$pull: {followingRequest: req.user.id}})
                await currentUser.updateOne({$push: {following: req.user.id}})

                return res.status(200).json({
                    success: true,
                    message: "You successfully accept follow request"
                })

            } catch (error) {
                console.error(error.message)
                res.status(500).send("Some error this occured")
            }
        } else{
            return res.status(403).json({
                success: false,
                message: "you are not allowed to accept this user"
            });
        }
    },

    rejectFollowRequest: async (req, res) => {
        if (req.user.id !== req.body.userId) {
            try {
                const user = await User.findById(req.user.id)
                const currentUser = await User.findById(req.body.userId)
                await user.updateOne({$pull: {followersRequest: req.body.userId}})
                await currentUser.updateOne({$pull: {followingRequest: req.user.id}})

                return res.status(200).json({
                    success: true,
                    message: "You successfully reject request"
                })
            } catch (error) {
                console.error(error.message)
                res.status(500).send("Some error this occured")
            }
        } else {
            return res.send(403).json({
                success: false,
                message: "you are not allowed to reject this user"
            });
        }
    },

    cancleFollowerRequest: async (req, res) => {
        if (req.user.id !== req.body.userId) {
            try {
                const user = await User.findById(req.user.id)
                const currentUser = await User.findById(req.body.userId)
                await user.updateOne({$pull: {followingRequest: req.body.userId}})
                await currentUser.updateOne({$pull: {followersRequest: req.user.id}})
            } catch (error) {
                console.error(error.message)
                res.status(500).send("Some error this occured")
            }
        } else {
            return res.send(403).json({
                success: false,
                message: "you are not allowed to cancle this user"
            });
        }
    },
}