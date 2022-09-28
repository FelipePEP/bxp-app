import { HttpPostClientSpy } from '../../test/mock-http-client'
import { RemoteGenerateWeapon } from './remote-generate-weapon'
import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: RemoteGenerateWeapon
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteGenerateWeapon(url, httpPostClientSpy)
  return { sut, httpPostClientSpy }
}

describe('Generate random wapon', () => {
  test('Should call correct URL with HttpPostClient', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.randomize(null)
    expect(httpPostClientSpy.url).toBe(url)
  })
})
