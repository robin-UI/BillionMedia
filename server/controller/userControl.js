const User = require("../model/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { request } = require("express");

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
                return res.json({ success: false, message: "You dosent exist hear" })
            }

            const passwordCompair = await bcrypt.compare(req.body.password, user.password)
            if (!passwordCompair) {
                success = false;
                return res.status(400).json({ success, error: "Pleace login with correct credintials" });
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
            userId = req.user.id;
            const user = await User.findById(userId).select("-passwords");
            const {password, updatedAt, ...other} = user._doc;
            res.send(other)
        } catch (error) {
            console.error(error.message)
            res.status(500).send("Some error this occured")
        }
    },

    editUser: async (req, res) => {
        try {
            userId = req.user.id;
            const user = await User.findOneAndUpdate({ _id: userId }, req.body, {
                new: true,
                runValidators: true,
            })

            if (!user) {
                return res.status(400).json({ success: false, error: "Pleace login with correct credintials" });
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
}