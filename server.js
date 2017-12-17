const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const sqlite = require('sqlite3');
const knex = require('./db.js');
const cors = require('cors');
const port = process.env.PORT || 3001;
const routes = require('./routes');
const server  = express();

// const corsOptions = {
//     "origin": "*",
//     "methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
// };

//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/27017', { useMongoClient: true });

//server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

//server.use(cors());

// server.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

//routes(server);

server.post('/Signup', function(req, res) {
    const newUser = req.body;
    console.log(newUser);
    knex
        .insert(newUser)
        .into('users')
        .then(function(idUsers) {
            res.status(201).json({ idUsers: idUsers });
        })
        .catch(function(err) {
            if (err.code === 'SQLITE_CONSTRAINT') {
                res.status(422).json({ error: 'The User already exist' });
            } else {
                res.status(500).json(err);
            }
        });
});

server.post('/users', function(req, res) {
    const user = req.body;
    knex
        .insert(user)
        .into('users')
        .then(function(idUsers) {
            res.status(201).json({ idUsers: idUsers });
        })
        .catch(function(err) {
            if (err.code === 'SQLITE_CONSTRAINT') {
                res.status(422).json({ error: 'The User already exist' });
            } else {
                res.status(500).json(err);
            }
        });
});

server.get('/users', function(req, res) {
    const users = knex('users')
        .then(function(records) {
            res.status(200).json(records);
        })
        .catch(function(error) {
            res.status(500).json({ error });
        });
});

server.get('/users/:id', function(req, res) {
    const { id } = req.params;

    const users = knex('users')
        .where('idUser', id)
        .then(function(records) {
            res.status(200).json(records);
        })
        .catch(function(error) {
            res.status(500).json({ error });
        });
});

server.delete('/users/:id', function(req, res) {
    knex('users')
        .where('idUser', req.params.id)
        .del()
        .then(function(count) {
            res.status(200).json({ deleted: count });
        })
        .catch(function(err) {
            if (err.code === 'SQLITE_CONSTRAINT') {
                res.status(422).json({ error: 'The User does not exist' });
            } else {
                res.status(500).json(err);
            }
        });
});

// server.put('/users/:id', function(req, res) {
//     const { id } = req.params;
//     knex('users')
//         .where('idUser')
//         .update(id, req.body)
//         .then(function(count) {
//             if (count > 0) {
//                 res.status(200).json({ updated: count });
//             } else {
//                 res.status(404).json(null);
//             }
//         })
//         .catch(function(err) {
//             res.status(500).json({ error: 'Could not update the User' });
//         });
// });

server.post('/question', function(req, res) {
    const questionid = req.body;
    knex
        .insert(questionid)
        .into('question')
        .then(function(idQuestion) {
            res.status(201).json({ idQuestion: idQuestion });
        })
        .catch(function(err) {
            if (err.code === 'SQLITE_CONSTRAINT') {
                res.status(422).json({ error: 'The Question already exist' });
            } else {
                res.status(500).json(err);
            }
        });
});

server.get('/question', function(req, res) {
    const questionid = knex('question')
        .then(function(records) {
            res.status(200).json(records);
        })
        .catch(function(error) {
            res.status(500).json({ error });
        });
});

server.get('/question/:id', function(req, res) {
    const { id } = req.params;

    const users = knex('question')
        .where('idQuestion', id)
        .then(function(records) {
            res.status(200).json(records);
        })
        .catch(function(error) {
            res.status(500).json({ error });
        });
});

server.delete('/question/:id', function(req, res) {
    knex('question')
        .where('idQuestion', req.params.id)
        .del()
        .then(function(count) {
            res.status(200).json({ deleted: count });
        })
        .catch(function(err) {
            if (err.code === 'SQLITE_CONSTRAINT') {
                res.status(422).json({ error: 'The Question does not exist' });
            } else {
                res.status(500).json(err);
            }
        });
});

// server.put('/users/:id', function(req, res) {
//     const { id } = req.params;
//     knex('users')
//         .where('idUser')
//         .update(id, req.body)
//         .then(function(count) {
//             if (count > 0) {
//                 res.status(200).json({ updated: count });
//             } else {
//                 res.status(404).json(null);
//             }
//         })
//         .catch(function(err) {
//             res.status(500).json({ error: 'Could not update the User' });
//         });
// });


server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
