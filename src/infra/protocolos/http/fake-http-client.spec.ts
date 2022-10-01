import { faker } from "@faker-js/faker"
import { FakeHttpClient } from "./fake-http-client"

describe('FakeHttpClient', () => {
  const makeSut = (requestParams: any, responseType: any): any => {
    const sut = new FakeHttpClient<typeof requestParams, typeof responseType>()
    return { sut }
  }

  test('Should request return correct object', async () => {
    const params = { url: faker.internet.url(), body: null }
    const { sut } = makeSut(params, null)
    const promise = sut.post(params)
    await expect(promise).resolves.toStrictEqual({
      statusCode: 200,
      body: null
    })
  })
})
