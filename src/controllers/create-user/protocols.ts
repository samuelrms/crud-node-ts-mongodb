import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";

export interface ICreateUserController {
  handle(
    httpRequest: HttpRequest<CreateUserParams>,
  ): Promise<HttpResponse<User>>;
}

export type CreateUserParams = Omit<User, "id">;

export interface ICreateUserRepository {
  createUser(params: CreateUserParams): Promise<User>;
}
