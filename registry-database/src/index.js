import "dotenv/config";
import knexCreator from "knex";

export const knex = knexCreator({
    client: "mysql",
    connection: process.env.DATABASE_URL,
    searchPath: ["knex", "public"],
});