import { User } from "../../models/user";

export type CreateUserParams = Omit<User, "id">;

export interface ICreateUserRepository {
  createUser(params: CreateUserParams): Promise<User>;
}
