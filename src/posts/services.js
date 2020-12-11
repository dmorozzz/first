const Post = require('./schema');

const createPost = async data => {
    const newPost = new Post(data);
    return await newPost.save();
}

const getAllPosts = async () => {
    return await Post.find();
}

const getPostById = async id => {
    return await Post.findById(id);
}

const deletePostById = async id => {
   const post = await Post.findByIdAndDelete(id);
}

const updatePost = async (id, data)=> {
    return await Post.findByIdAndUpdate(id, data);
}

module.exports = {
    createPost, 
    getAllPosts,
    getPostById,
    deletePostById,
    updatePost
}
