
exports.up = function(knex, Promise) {
    return knex.schema.createTable('votes', function(tbl) {
        tbl.integer('QuestionId').notNullable();
        tbl.integer('VoteTypeId').notNullable();
        tbl.integer('UserId').notNullable();
        tbl.timestamp('DateCreated').defaultTo(knex.fn.now());
    }); 
};

exports.down = function(knex, Promise) {
    knex.schema.dropTableIfExists('votes');
};
