import { Router } from "express";

const home = Router();

export const homeRoute = () =>
  home.get("/", async (_, res) => {
    res
      .status(200)
      .send(
        "Welcome to the users CRUD developed by Samuel Ramos, at the moment we only have the '/users' route",
      );
  });
