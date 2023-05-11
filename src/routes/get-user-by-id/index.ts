import { Router } from "express";
import { MongoGetUserByIDRepository } from "../../repositories/get-user-by-id/mongo-get-user-by-id";
import { GetUserByIDController } from "../../controllers/get-user-by-id/get-user-by-id";

const getUserByID = Router();

const mongoGetUserByIDRepository = new MongoGetUserByIDRepository();

const getUserByIDController = new GetUserByIDController(
  mongoGetUserByIDRepository,
);
export const getUserByIDRoute = () =>
  getUserByID.get("/users/:id", async (req, res) => {
    const { body, statusCode } = await getUserByIDController.handle({
      params: req.params,
    });

    res.status(statusCode).send(body);
  });
