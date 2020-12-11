const mongoose = require('mongoose');

const post = {
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
}

const postSchema = new mongoose.Schema(post);

module.exports = mongoose.model('Post', postSchema);