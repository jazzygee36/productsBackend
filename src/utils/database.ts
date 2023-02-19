import "dotenv/config";
import { Sequelize, Dialect } from "sequelize";

const DATABASE_DIALET = process.env.DATABASE_DIALET as Dialect;
const DATABASE_USERNAME = process.env.DATABASE_USERNAME as string;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD as string;
const DATABASE_NAME = `${process.env.DATABASE_NAME}` as string;
const DATABASE_HOST = process.env.DATABASE_HOST as string;
const DATABASE_PORT = process.env.DATABASE_PORT as string;

const DB_URL = `postgres:${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`;

const options = {
  logging: false,
  dialect: DATABASE_DIALET,
  pool: { max: 1, min: 0, idle: 10000, acquire: 1000000 },
};
const sequelize = new Sequelize(DB_URL, options);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to database has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

export default sequelize;
