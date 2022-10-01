import { faker } from "@faker-js/faker"
import { FakeHttpClient } from "./fake-http-client"

describe('FakeHttpClient', () => {
  const makeSut = (requestParams: any, responseType: any): any => {
    const sut = new FakeHttpClient<typeof requestParams, typeof responseType>()
    return { sut }
  }

  test('Should call correct URL with HttpPostClient and correct body', async () => {
    const params = { url: faker.internet.url(), body: null }
    const { sut } = makeSut(params, null)
    const promise = sut.post(params)
    await expect(promise).resolves.toStrictEqual({
      statusCode: 200,
      body: null
    })
  })
})
