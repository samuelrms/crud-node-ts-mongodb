import { User } from "../../models/user";
import { badRequest, serverErrorRequest, successRequest } from "../helpers";
import { Controller, HttpRequest, HttpResponse } from "../protocols";
import { IDeleteUserRepository } from "./protocols";

export class DeleteUserController implements Controller {
  constructor(private readonly deleteUserRepository: IDeleteUserRepository) {}
  async handle(
    httpRequest: HttpRequest<unknown>,
  ): Promise<HttpResponse<User | string>> {
    try {
      const id = httpRequest?.params?.id;

      if (!id) {
        return badRequest("Missing user ID");
      }

      const user = await this.deleteUserRepository.deleteUser(id);

      return successRequest<User>(user);
    } catch (error) {
      return serverErrorRequest(error);
    }
  }
}
