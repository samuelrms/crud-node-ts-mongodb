import { User } from "../../models/user";
import { Controller, HttpRequest, HttpResponse } from "../protocols";
import { IDeleteUserRepository } from "./protocols";

export class DeleteUserController implements Controller {
  constructor(private readonly deleteUserRepository: IDeleteUserRepository) {}
  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User>> {
    try {
      const id = httpRequest?.params?.id;

      if (!id) {
        return {
          statusCode: 400,
          body: "Missing user ID",
        };
      }

      const user = await this.deleteUserRepository.deleteUser(id);

      return {
        statusCode: 200,
        body: user,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: `Something went wrong \n${error}`,
      };
    }
  }
}
