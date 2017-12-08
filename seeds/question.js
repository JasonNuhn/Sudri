exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('question')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('question').insert([
                { 'idQuestion': 1, UserId: 1, title: 'Hello Sign', body: 'Meeting a deaf person, how do i say hello', languageTag: 'american sign language', Votes_idVotes: 1, QuestionType: 'introduction' },
                { 'idQuestion': 2, UserId: 2, title: 'How Are you Sign', body: 'met a deaf person at coffee shop, want to learn how are you', languageTag: 'british sign language', Votes_idVotes: 2, QuestionType: 'introduction' },
                { 'idQuestion': 3, UserId: 3, title: 'Goodbye Sign', body: 'I know how to say hello, but how to do goodbye?', languageTag: 'japanese sign language', Votes_idVotes: 3, QuestionType: 'introduction' },
            ]);
        });
  };