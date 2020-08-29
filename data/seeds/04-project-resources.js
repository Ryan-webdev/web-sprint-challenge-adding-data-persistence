
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("project_task").insert([
    {
      projects_id: 1,
      resource_id: 1,
    },
    {
      projects_id: 2,
      resource_id: 2,
     },
     {
      projects_id: 3,
      resource_id: 3,
     },
     {
      projects_id: 4,
      resource_id: 4,
     },
  ]);
};
