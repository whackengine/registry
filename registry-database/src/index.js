import "dotenv/config";
import knexCreator from "knex";

const knex = knexCreator({
    client: "mysql",
    connection: process.env.DATABASE_URL,
    searchPath: ["knex", "public"],
});