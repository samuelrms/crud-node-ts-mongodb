export interface HttpResponse<T> {
  statusCode: HttpStatusCode;
  body: T;
}

export interface HttpRequest<B> {
  body?: B;
  params?: Record<string, string>;
  headers?: Record<string, string>;
}

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  INTERNAL_SERVER_ERROR = 500,
}

export interface Controller {
  handle(httpRequest: HttpRequest<unknown>): Promise<HttpResponse<unknown>>;
}
