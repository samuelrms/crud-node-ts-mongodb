import express from "express";
import { config } from "dotenv";
import { MongoClient } from "./database/mongo";
import { getUsersRoute } from "./routes/get-user";
import { homeRoute } from "./routes/home";
import { createUserRoute } from "./routes/create-user";
import { updateUserRoute } from "./routes/update-user";
import { deleteUserRoute } from "./routes/delete-user";

const main = async () => {
  config();
  const app = express();
  app.use(express.json());
  await MongoClient.connect();

  app.get("/", homeRoute());

  app.use("/users", getUsersRoute());

  app.post("/users", createUserRoute());

  app.patch("/users/:id", updateUserRoute());

  app.delete("/users/:id", deleteUserRoute());

  const port = process.env.PORT || 3030;

  app.listen(port, () => console.log(`🔥 Start server port = ${port} 🔥`));
};

main();
