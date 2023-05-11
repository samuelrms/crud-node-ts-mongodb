import validator from "validator";

import { User } from "../../models/user";
import { Controller, HttpRequest, HttpResponse } from "../protocols";
import { CreateUserParams, ICreateUserRepository } from "./protocols";
import {
  isStrongPassword,
  validateBirth,
  validateCpf,
} from "../../utils/validate";
import { badRequest, createdRequest, serverErrorRequest } from "../helpers";

export class CreateUserController implements Controller {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}
  async handle(
    httpRequest: HttpRequest<CreateUserParams>,
  ): Promise<HttpResponse<User | string>> {
    try {
      const { body } = httpRequest;

      const requiredFields = [
        "firstName",
        "lastName",
        "email",
        "cpf",
        "password",
        "birth",
      ];

      for (const field of requiredFields) {
        if (!body?.[field as keyof CreateUserParams]?.length) {
          return badRequest(`Field ${field} is required`);
        }
      }

      if (!httpRequest.body) return badRequest("Body is required");

      let errorMessage = "";

      const emailIsValid = validator.isEmail(httpRequest.body?.email);
      const cpfIsValid = validateCpf(httpRequest?.body?.cpf ?? "");
      const birthIsValid = validateBirth(httpRequest?.body?.birth);
      const strongPassword = isStrongPassword(httpRequest?.body?.password);

      if (!emailIsValid) errorMessage = "Email is invalid";
      if (!cpfIsValid) errorMessage = "cpf is invalid";
      if (!birthIsValid)
        errorMessage = "Birth date is invalid format (dd/mm/yyyy)";
      if (!strongPassword)
        errorMessage =
          "The password must contain at least 8 characters, being alphanumeric and having a special character";

      if (errorMessage !== "") {
        return badRequest(errorMessage);
      }

      const user = await this.createUserRepository.createUser(httpRequest.body);

      return createdRequest<User>(user);
    } catch (error) {
      return serverErrorRequest(error);
    }
  }
}
