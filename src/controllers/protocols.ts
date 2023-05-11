export interface HttpResponse<T> {
  statusCode: number;
  body: T;
}

export interface HttpRequest<B> {
  body?: B;
  params?: any;
  headers?: any;
}

export interface Controller {
  handle(httpRequest: HttpRequest<unknown>): Promise<HttpResponse<unknown>>;
}
