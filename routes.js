const userControllers = require('./UserControllers');
const postControllers = require('./PostControllers');

module.exports = app => {
    app
        .route('/new-user')
        .post(userControllers.createUser); //works on nodemon!
    
    app
        .route('/users')
        .get(userControllers.userList); //works on nodemon!

    app
        .route('/users/:id')
        .get(userControllers.findUser); 

    app
        .route('/new-post')
        .post(postControllers.createPost); //works on nodemon!

    app
        .route('/posts')
        .get(postControllers.postList); // works on nodemon!
};