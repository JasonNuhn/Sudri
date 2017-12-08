exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('votes')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('votes').insert([
                { 'QuestionId': 1, 'VoteTypeId': 1, 'UserId': 1},
                { 'QuestionId': 2, 'VoteTypeId': 2, 'UserId': 2},
                { 'QuestionId': 3, 'VoteTypeId': 3, 'UserId': 3},
            ]);
        });
  };