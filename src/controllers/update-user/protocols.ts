import { User } from "../../models/user";

export type UserPropertiesToOmit = "id" | "cpf" | "email" | "birth";

export type UpdateUserParams = Partial<Omit<User, UserPropertiesToOmit>>;

export interface IUpdateUserRepository {
  updateUser(id: string, params: UpdateUserParams): Promise<User>;
}
