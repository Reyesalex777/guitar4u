const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: {
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
    comments: [commentSchema]

}, {
    timestamps: true
});

module.exports = mongoose.model('Blog', blogSchema);