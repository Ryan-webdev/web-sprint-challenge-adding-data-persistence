
exports.up = async function(knex) {
  await knex.scheme
    .createTable("projcts", tbl => {
        tbl.increments("id")
        tbl.text("name", 128).notNull().unique()
        tbl.text("description", 500)
        tbl.boolean("completed").defaultTo(false)
    })

    .createTable("resource", tbl => {
        tbl.increments("id")
        tbl.text("name", 128).notNull()
        tbl.text("description")
    })

    .createTable("tasks", tbl => {
        tbl.increments("id")
        tbl.text("description").notNull()
        tbl.text("notes")
        tbl.boolean("completed").defaultTo(false)

        tbl.ineger("projects_id")
        .notNull()
        .references("projects.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCAED")
    })

    .createTable("project_task", tbl =>{
        tbl.primary(["projects_id", "resource_id"])

        tbl.ineger("projects_id")
        .notNull()
        .references("projects.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCAED")

        tbl.ineger("resource_id")
        .notNull()
        .references("resource.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCAED")

    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("project_task")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resource")
    await knex.schema.dropTableIfExists("projcts")
};
