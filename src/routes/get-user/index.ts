import { Router } from "express";
import { MongoGetUsersRepository } from "../../repositories/get-users/mongo-get-users";
import { GetUsersController } from "../../controllers/get-users/get-users";

const getUsers = Router();
const mongoGetUsersRepository = new MongoGetUsersRepository();
const getUsersController = new GetUsersController(mongoGetUsersRepository);

export const getUsersRoute = () =>
  getUsers.get("/", async (_, res) => {
    const { body, statusCode } = await getUsersController.handle();
    res.status(statusCode).send(body);
  });
