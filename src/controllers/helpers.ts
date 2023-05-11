import { HttpResponse } from "./protocols";

export const badRequest = (massage: string): HttpResponse<string> => {
  return {
    statusCode: 400,
    body: massage,
  };
};

export const successRequest = <T>(body: T): HttpResponse<T> => {
  return {
    statusCode: 200,
    body,
  };
};

export const createdRequest = <T>(body: T): HttpResponse<T> => {
  return {
    statusCode: 201,
    body,
  };
};

export const serverErrorRequest = (error: unknown): HttpResponse<string> => {
  return {
    statusCode: 500,
    body: `Something went wrong \n${error}`,
  };
};
