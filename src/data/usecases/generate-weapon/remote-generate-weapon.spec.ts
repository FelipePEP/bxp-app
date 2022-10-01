import { HttpPostClientSpy } from '@/data/mock/mock-http-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { RemoteGenerateWeapon } from '@/data/usecases/generate-weapon/remote-generate-weapon'
import { InvalidParamsError } from '@/domain/error/invalid-params'
import { WeaponModel } from '@/domain/models/weapon-model'
import { GenerateWeapon } from '@/domain/usecases/generate-weapon'
import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: RemoteGenerateWeapon
  httpPostClientSpy: HttpPostClientSpy<GenerateWeapon.params, WeaponModel>
}

const makeSut = (params: any = { url: faker.internet.url() }): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<GenerateWeapon.params, WeaponModel>()
  const sut = new RemoteGenerateWeapon(params.url, httpPostClientSpy)
  return { sut, httpPostClientSpy }
}

describe('Generate random weapon', () => {
  test('Should call correct URL with HttpPostClient', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut({ url: url })
    await sut.randomize(null)
    expect(httpPostClientSpy.url).toBe(url)
  })

  test('Should call correct URL with HttpPostClient and correct body', async () => {
    const body = { level: parseInt(faker.random.numeric()) }
    const { sut, httpPostClientSpy } = makeSut()
    await sut.randomize(body)
    expect(httpPostClientSpy.body).toBe(body)
  })

  test('Should throw InvalidParamsError if HttpPostClient returns 400', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.randomize(null)
    await expect(promise).rejects.toThrow(new InvalidParamsError())
  })
})
