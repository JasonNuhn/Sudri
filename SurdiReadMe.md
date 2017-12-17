Must Review! https://github.com/nsuthar0914/graphql-redux-sqlite

Website Pages
    Home
    Question
    Language
    Users
    Search
    Login
    Signin

Start - Finish
    migrations/
        UsersTable.js
          isUser
          firstName
          lastName
          email
          displayName
          city
          state
          createdAt  
        QuestionsTable.js
            idQuestion
            UserId
            title
            body
            languageTag
            Votes_idVotes
            QuestionType
            createdAt
        VotesTable.js
            QuestionId
            VoteTypeId
            UserId
            DateCreated

    src/
        actions/index.js
        reducers/postsReducer.js
        reducers/index.js
    
    routes.js

    server.js
        post
            users
            question
        get
            users
            users/:id
            question
            question/:id
        delete
            users/:id
            question/:id
