export enum HttpStatusCode {
  badRequest = 400,
  unathorized = 401,
  noContent = 204
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  body?: T
}
