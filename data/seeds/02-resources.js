exports.seed = function(knex) {
  return knex("resources").insert([
    {
      name: "Plate",
      description:"food transporting device"
    },
    {
       name: "fork",
       description:"device to shovel food in face"
     },
     {
       name: "knife",
       description:"for cutting food"
     },
     {
       name: "shampoo",
       description:"for washing hair"
     },
  ]);
};