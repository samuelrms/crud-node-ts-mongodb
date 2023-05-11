import { HttpResponse, HttpStatusCode } from "./protocols";

export const badRequest = (massage: string): HttpResponse<string> => {
  return {
    statusCode: HttpStatusCode.BAD_REQUEST,
    body: massage,
  };
};

export const successRequest = <T>(body: T): HttpResponse<T> => {
  return {
    statusCode: HttpStatusCode.OK,
    body,
  };
};

export const createdRequest = <T>(body: T): HttpResponse<T> => {
  return {
    statusCode: HttpStatusCode.CREATED,
    body,
  };
};

export const serverErrorRequest = (error: unknown): HttpResponse<string> => {
  return {
    statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
    body: `Something went wrong \n${error}`,
  };
};
