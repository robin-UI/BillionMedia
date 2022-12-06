const mongoose = require('mongoose')
const { Schema } = mongoose;

//mongoose Schema validation
const UserSchema = new Schema({
    userId: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        min: 3,
        max: 500,
        require: true
    },
    likes: {
        type: Array,
        default: [],
    },
    posts: {
        type: String,
        default: '',
    },

},
    { timestamps: true }
);

const User = mongoose.model('user', UserSchema);
module.exports = User;