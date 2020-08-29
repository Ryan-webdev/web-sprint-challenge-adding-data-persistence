
exports.up = function (knex) {
    return knex.schema
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

            tbl.integer("projects_id")
                .notNull()
                .references("projects.id")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE")
        })

        .createTable("project_task", tbl => {
            tbl.primary(["projects_id", "resource_id"])

            tbl.integer("projects_id")
                .notNull()
                .references("projects.id")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE")

            tbl.integer("resource_id")
                .notNull()
                .references("resource.id")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE")

        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("project_task")
        .dropTableIfExists("tasks")
        .dropTableIfExists("resource")
        .dropTableIfExists("projcts")
};
