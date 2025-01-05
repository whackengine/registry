import "dotenv/config";

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {

  development: {
    client: "mysql",
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: "knex_migrations"
    },
  },

  staging: {
    client: "mysql",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    },
  },

  production: {
    client: "mysql",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  migrations: {
    client: "mysql",
    connection: process.env.DATABASE_URL,

    directory: "./migrations",
    loadExtensions: [".js"],
  },

  seeds: {
    client: "mysql",
    connection: process.env.DATABASE_URL,

    directory: "./seeds",
    loadExtensions: [".js"],
  },
};
