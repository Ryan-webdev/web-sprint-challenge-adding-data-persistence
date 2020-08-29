
exports.seed = function(knex) {
  return knex('projects').insert([
    {
      name: "Morning food",
      description: "Prepare breakfast",
      completed:true
    },
    {
     name: "Afternoon food",
     description: "Prepare lunch",
     completed:false
   },
   {
     name: "Night food",
     description: "Prepare Dinner",
     completed:false
   },
   {
     name: "shower",
     description: "Get shower ready, warm water",
     completed:false
   },
  ]);
};