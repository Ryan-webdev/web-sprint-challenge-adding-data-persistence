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
       name: "Napkin",
       description:"for wiping food off face"
     },
     {
       name: "shampoo",
       description:"for washing hair"
     },
     {
       name: "face wash",
       description:"soap for washing face"
     },
  ]);
};