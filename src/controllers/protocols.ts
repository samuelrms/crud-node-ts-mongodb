export interface HttpResponse<T> {
  statusCode: number;
  body: T;
}

export interface HttpRequest<B> {
  body?: B;
  params?: Record<string, string>;
  headers?: Record<string, string>;
}

export interface Controller {
  handle(httpRequest: HttpRequest<unknown>): Promise<HttpResponse<unknown>>;
}
