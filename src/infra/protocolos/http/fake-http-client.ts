import { HttpPostClient, HttpPostParams } from '@/data/protocols/http/http-post-client'
import { HttpResponse } from '@/data/protocols/http/http-response'

export class FakeHttpClient<T, R> implements HttpPostClient<T, R> {
  async post (params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    return Promise.resolve({
      statusCode: 200,
      body: null
    })
  }
}
