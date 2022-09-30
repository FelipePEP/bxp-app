import { HttpPostClient, HttpPostParams } from '../../../data/protocols/http/http-post-client'

export class FakeHttpClient implements HttpPostClient {
  async post (params: HttpPostParams): Promise<void> {
    return Promise.resolve()
  }
}
