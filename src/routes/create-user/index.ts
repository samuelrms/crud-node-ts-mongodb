import { Router } from "express";
import { MongoCreateUserRepository } from "../../repositories/create-user/mongo-create-user";
import { CreateUserController } from "../../controllers/create-user/create-user";

const createUser = Router();
const mongoCreateUserRepository = new MongoCreateUserRepository();
const createUserController = new CreateUserController(
  mongoCreateUserRepository,
);

export const createUserRoute = () =>
  createUser.post("/users", async (req, res) => {
    const { body, statusCode } = await createUserController.handle({
      body: req.body,
    });

    res.status(statusCode).send(body);
  });
