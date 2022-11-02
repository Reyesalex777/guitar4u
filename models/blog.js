const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
    type:  String,
    required: true
    },
    blog: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    userName: {
        type: String
    },
    userAvatar: {
        type: String
    },

}, {
    timestamps: true
});

module.exports = mongoose.model('Blog', blogSchema);