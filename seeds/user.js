exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('users').insert([
                { 'idUser': 1, firstName: 'billy', lastName: 'bob', email: 'billybob@ls.com', displayName: 'bbob', city: 'thornton', state: 'co' },
                { 'idUser': 2, firstName: 'jim', lastName: 'bobby', email: 'jimbobby@ls.com', displayName: 'jbob', city: 'liverpool', state: 'ny' },
                { 'idUser': 3, firstName: 'jason', lastName: 'josh', email: 'greatestteamever@ls.com', displayName: 'ateam', city: 'gotham city', state: 'somewhere' },
            ]);
        });
  };