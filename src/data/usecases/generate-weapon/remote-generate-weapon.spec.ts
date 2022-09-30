import { HttpPostClientSpy } from '@/data/mock/mock-http-client'
import { RemoteGenerateWeapon } from '@/data/usecases/generate-weapon/remote-generate-weapon'
import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: RemoteGenerateWeapon
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (params: any = { url: faker.internet.url() }): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteGenerateWeapon(params.url, httpPostClientSpy)
  return { sut, httpPostClientSpy }
}

describe('Generate random weapon', () => {
  test('Should call correct URL with HttpPostClient', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut({url: url})
    await sut.randomize(null)
    expect(httpPostClientSpy.url).toBe(url)
  })

  test('Should call correct URL with HttpPostClient and correct body', async () => {
    const body = { level: parseInt(faker.random.numeric()) }
    const { sut, httpPostClientSpy } = makeSut()
    await sut.randomize(body)
    expect(httpPostClientSpy.body).toBe(body)
  })
})

