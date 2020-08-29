

exports.seed = function(knex) {
  return knex('recipes').insert([
    {name: 'Crock Pot Roast'},
    {name: 'Roasted Asparagus'},
  ]);
};