import { MongoClient as Mongodb, Db } from "mongodb";

export const MongoClient = {
  client: undefined as unknown as Mongodb,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const url = process.env.MONGODB_URL_COMPASS || "mongodb://localhost:27017";
    const username = process.env.MONGODB_USERNAME || "root";
    const password = process.env.MONGODB_PASSWORD_COMPASS || "password";

    if (!url || !username || !password)
      return console.log("🧯 Error starting the server mongodb 🧯");

    const client = new Mongodb(url, {
      auth: {
        password,
        username,
      },
    });
    const db = client.db("users-database");

    this.client = client;
    this.db = db;

    console.log("🎇 Connected to mongodb 🎇");
  },
};
