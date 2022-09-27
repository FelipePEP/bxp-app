import { HttpPostClientSpy } from '../../test/mock-http-client'
import { RemoteGenerateWeapon } from './remote-generate-weapon'

type SutTypes = {
  sut: RemoteGenerateWeapon
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = 'foo'): SutTypes =>{
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteGenerateWeapon(url, httpPostClientSpy)
  return { sut, httpPostClientSpy }
}

describe('Generate random wapon', () => {
  test('Should call correct URL with HttpPostClient', async () => {
    const url = 'bar'
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.generateWeapon()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
