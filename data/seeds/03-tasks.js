
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("to_do").insert([
    {
      description: "Eat Breakfast",
      notes: "cook eggs",
      completed: true,
      projects_id: 1
    },
    {
      description: "Eat Lunch",
      notes: "Get lunch ready",
      completed: false,
      projects_id: 2
    },
    {
      description: "Eat Dinner",
      notes: "heat food up",
      completed: false,
      projects_id: 3
    },
    {
      description: "Warm water",
      notes: "take shower",
      completed: false,
      projects_id: 4
    },
  ]);
};
