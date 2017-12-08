
exports.up = function(knex, Promise) {
    return knex.schema.createTable('question', function(tbl) {
        tbl.integer('idQuestion').notNullable();
        tbl.string('UserId', 45).notNullable();
        tbl.string('title', 45).notNullable();
        tbl.string('body', 45).notNullable();
        tbl.string('languageTag', 45).notNullable();
        tbl.integer('Votes_idVotes').notNullable();
        tbl.string('QuestionType', 45).notNullable();
        tbl.timestamp('createdAt').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    knex.schema.dropTableIfExists('question');
};
