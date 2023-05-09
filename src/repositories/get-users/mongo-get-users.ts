import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Samuel",
        lastName: "Ramos",
        birth: new Date(2000, 1, 9),
        cpf: "11377733670",
        email: "samuelaoliveiraramos@gmail.com",
        password: "1234",
      },
    ];
  }
}
