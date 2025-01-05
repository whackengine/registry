
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
  return knex.schema
    .createTable("users", table => {
      table.bigIncrements("id");
      table.datetime("registered_at").defaultTo(knex.fn.now());
      table.boolean("admin").defaultTo(false);
      table.string("fullname", 127).notNullable();
      table.string("github_access_token", 511).notNullable();
    })
    .createTable("maintenance_invites", table => {
      table.bigIncrements("id");
      table.datetime("sent_at").defaultTo(knex.fn.now());
      table.bigint("package_id");
      table.bigint("invitee_user_id");
      table.bigint("invited_by_user_id");
    })
    .createTable("packages", table => {
      table.bigIncrements("id");
      table.string("name", 127).notNullable();
      table.string("description", 512).notNullable();
      table.string("keywords", 512).notNullable();
      table.string("categories", 512).notNullable();
    })
    .createTable("maintainers", table => {
      table.bigIncrements("id");
      table.bigint("user_id");
      table.bigint("package_id");
    })
    .createTable("package_versions", table => {
      table.bigIncrements("id");
      table.string("version_number", 32).notNullable();
      table.datetime("published_at").defaultTo(knex.fn.now());
      table.string("readme", 50000).notNullable();
      table.string("license", 64).notNullable();
      table.string("repository", 255).notNullable();
      table.binary("zip");
      table.bigint("package_id");
      table.boolean("yanked");
      table.bigint("downloads").defaultTo(0);
      table.datetime("downloads_this_week_at").defaultTo(knex.fn.now());
      table.bigint("downloads_this_week").defaultTo(0);
    })
    .createTable("dependencies", table => {
      table.bigIncrements("id");
      table.bigint("dependency_package_id");
      table.string("dependency_version_number", 32).notNullable();
      table.bigint("dependent_package_id");
      table.string("dependent_version_number", 32).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
  return knex.schema
    .dropTable("users")
    .dropTable("maintenance_invites")
    .dropTable("packages")
    .dropTable("maintainers")
    .dropTable("package_versions")
    .dropTable("dependencies");
};
