import { User } from "../../models/user";
import { MongoUser } from "../../repositories/mongo-pretocols";

export type CreateUserParams = MongoUser;

export interface ICreateUserRepository {
  createUser(params: CreateUserParams): Promise<User>;
}
