require('dotenv').config();

const chai = require('chai');
const chaiHtpp = require('chai-http');
const mongoose = require('mongoose');


const { app, apiUrl } = require('../src/app');
const { connectUrl,  databaseOptions } = require('../database');


const  { expect } = chai;

chai.use(chaiHtpp);


const testablePost = {
    author: 'test',
    title: 'test',
    text: 'test',
};

before( async () => {
    return await mongoose.connect(connectUrl, databaseOptions);
});

describe('Server', () => {
    it('Create a post', done => {
        chai
            .request(app)
            .post(`${apiUrl}/posts/`)
            .send(testablePost)
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res).to.have.an('object');
                testablePost.id = res.body._id;
                done();
                
            })
    })
    it('Get all posts', done => {
        chai
            .request(app)
            .get(`${apiUrl}/posts/`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.an('array')
                expect(res.body[0]).to.have.an('object')
                done();
            })

    });

    it('Get one post by id', done => {
        chai
            .request(app)
            .get(`${apiUrl}/posts/${testablePost.id}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.an('object');
                done();
            })
    });

    it('Update one post by id', done => {
        chai
            .request(app)
            .put(`${apiUrl}/posts/${testablePost.id}`)
            .send({title: 'change'})
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.an('object')
                done()
            })
    })

    it('Delete one post by id', done => {
        chai
            .request(app)
            .delete(`${apiUrl}/posts/${testablePost.id}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.an('object')
                done()
            })
    } )
}) 
