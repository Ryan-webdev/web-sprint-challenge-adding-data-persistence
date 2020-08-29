
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("project_task").insert([
    {
      project_task: 1,
      item_id: 1,
    },
    {
      project_task: 2,
      resource_id: 2,
     },
     {
      project_task: 3,
      resource_id: 3,
     },
     {
      project_task: 4,
      resource_id: 4,
     },
     {
      project_task: 5,
      resource_id: 5,
     },

  ]);
};
