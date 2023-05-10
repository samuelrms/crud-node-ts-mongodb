import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";

export type UserPropertiesToOmit = "id" | "cpf" | "email" | "birth";

export type UpdateUserParams = Partial<Omit<User, UserPropertiesToOmit>>;

export interface IUpdateUserController {
  handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User>>;
}

export interface IUpdateUserRepository {
  updateUser(id: string, params: UpdateUserParams): Promise<User>;
}
