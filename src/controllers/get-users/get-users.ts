import { User } from "../../models/user";
import { serverErrorRequest, successRequest } from "../helpers";
import { Controller, HttpResponse } from "../protocols";
import { IGetUsersRepository } from "./protocols";

export class GetUsersController implements Controller {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}

  async handle(): Promise<HttpResponse<User[] | string>> {
    try {
      const users = await this.getUsersRepository.getUsers();

      return successRequest<User[]>(users);
    } catch (error) {
      return serverErrorRequest(error);
    }
  }
}
