const mongoose = require('mongoose')
const { Schema } = mongoose;

//mongoose Schema validation
const UserSchema = new Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true,
    },
    name: {
        type: String,
        min: 3,
        max: 20,
        require: true
    },
    email: {
        type: String,
        min: 7,
        max: 90,
        require: true,
        unique: true,
    },
    number: {
        type: Number,
        min: 10,
        require: true,
    },
    password: {
        type: String,
        min: 6,
        require: true,
    },
    following: {
        type: Array,
        default: [],
    },
    followers: {
        type: Array,
        default: [],
    },
    profilePic: {
        type: String,
        default: '',
    },

},
    { timestamps: true }
);

const User = mongoose.model('user', UserSchema);
module.exports = User;