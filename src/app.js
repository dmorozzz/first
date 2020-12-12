const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const apiUrl = '/api/v1';

const { postsRouter } = require('./posts');

app.use(`${apiUrl}/posts/`, postsRouter);

const { handleError } = require('./errors/error-handler');

app.use(async (error, req, res, next) => {
    const isOperation =  await handleError(error);
    
    if(isOperation) {
        return res.status(error.statusCode).json(error.message);
    }
})

module.exports =  {
    app,
    apiUrl
};