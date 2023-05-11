import { Router } from "express";
import { MongoUpdateUserRepository } from "../../repositories/update-user/mongo-update-user";
import { UpdateUserController } from "../../controllers/update-user/update-user";

const updateUser = Router();

const mongoUpdateUserRepository = new MongoUpdateUserRepository();
const updateUserController = new UpdateUserController(
  mongoUpdateUserRepository,
);

export const updateUserRoute = () =>
  updateUser.patch("/users/:id", async (req, res) => {
    const { body, statusCode } = await updateUserController.handle({
      body: req.body,
      params: req.params,
    });

    res.status(statusCode).send(body);
  });
