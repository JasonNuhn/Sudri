const mongoose = require('mongoose');

const User = require('./UserModel');

const STATUS_USER_ERROR = 422;

const createUser = (req, res) => {
    const { firstName, lastName, email, displayName, city, state } = req.body;
    const newUser = new User({ firstName, lastName, email, displayName, city, state });
    newUser.save((err, createdUser) => {
        if (err) {
            res.status(STATUS_USER_ERROR);
            res.json(err);
            return;
        }
        res.json(createdUser);
    });
};

const findUser = (req, res) => {
    const { firstName, lastName, email, displayName, city, state } = req.body;
    User.findOne({ firstName, lastName, email, displayName, city, state }, (err, firstName, lastName, email, displayName, city, state) => {
        if (err || !firstName || !lastName || !email || !displayName || !city || !state) {
            res.status(STATUS_USER_ERROR);
            res.json({ message: 'Incorrect credentials!' });
        }
    })
    .then(user => {
        res.json(user);
    })
    .catch(err => {
        res.status(STATUS_USER_ERROR);
        res.json({ errorMessages: err.message });
    });
};

const userList = (req, res) => {
    User.find({})
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
    createUser,
    userList,
    findUser,
};