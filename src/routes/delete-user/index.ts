import { Router } from "express";
import { MongoDeleteRepository } from "../../repositories/delete-user/delete-user";
import { DeleteUserController } from "../../controllers/delete-user/delete-user";

const deleteUser = Router();

const mongoDeleteUserRepository = new MongoDeleteRepository();

const deleteUserController = new DeleteUserController(
  mongoDeleteUserRepository,
);
export const deleteUserRoute = () =>
  deleteUser.delete("/users/:id", async (req, res) => {
    const { body, statusCode } = await deleteUserController.handle({
      params: req.params,
    });

    res.status(statusCode).send(body);
  });
