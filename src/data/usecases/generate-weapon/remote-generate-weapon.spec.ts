import { HttpPostClient } from '../../../infra/protocols/http/http-post-client'
import { RemoteGenerateWeapon } from './remote-generate-weapon'

describe('Generate random wapon', () => {
  test('Should call correct URL with HttpPostClient', async () => {
    class HttpClientSpy implements HttpPostClient {
        url?: string
        async post (url: string): Promise<void> {
          this.url = url
          return Promise.resolve()
        }
    }
    const url = 'xpto'
    const httpPostClientSpy = new HttpClientSpy()
    const sut = new RemoteGenerateWeapon(url, httpPostClientSpy)
    await sut.generateWeapon()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
