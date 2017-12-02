const mongoose = require('mongoose');

const Post = require('./PostModel');

const STATUS_USER_ERROR = 422;

const createPost = (req, res) => {
    const { title, body, language } = req.body;
    const newPost = new Post({ title, body, language });
    newPost.save((err, createdPost) => {
        if (err) {
            res.status(STATUS_USER_ERROR);
            res.json(err);
            return;
        }
        res.json(createdPost);
    });
};

const postList = (req, res) => {
    Post.find({})
        .exec()
        .then((posts) => {
            res.json(posts);
        })
        .catch((err) => {
            res.status(STATUS_USER_ERROR).json(err);
            return;
        });
};

module.exports = {
    createPost,
    postList,
};