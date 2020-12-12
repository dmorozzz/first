const router = require('express').Router();

const { OperationError } = require('../errors/error-handler');


const { 
    createPost, 
    getAllPosts,
    getPostById,
    deletePostById,
    updatePost
} = require('./services');

router.get('/',  async (req, res, next) => {
    try {
        const posts = await getAllPosts();
        return res.status(200).json(posts);
    } catch (error) {
        return next(new OperationError(400, error.message));
    }
});

router.post('/', async (req, res, next) => {
    try {
        const newPost = await createPost(req.body);
        return res.status(201).json(newPost);
    } catch (error) {
        return next(new OperationError(400, error.message));
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const post = await getPostById(req.params.id);
        return res.status(200).json(post);
    } catch (error) {
        return next(new OperationError(400, error.message));
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        await deletePostById(req.params.id);
        return res.status(200).end();
    } catch (error) {
        return next(new OperationError(400, error.message));       
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const updatedPost = await updatePost(req.params.id, req.body);
        return res.status(200).json(updatedPost);
    } catch (error) {
         return next(new OperationError(400, error.message));
    }
})

module.exports = {
    router
}