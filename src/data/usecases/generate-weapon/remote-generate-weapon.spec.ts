import { HttpPostClientSpy } from '../../test/mock-http-client'
import { RemoteGenerateWeapon } from './remote-generate-weapon'

describe('Generate random wapon', () => {
  test('Should call correct URL with HttpPostClient', async () => {
    const url = 'xpto'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteGenerateWeapon(url, httpPostClientSpy)
    await sut.generateWeapon()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
