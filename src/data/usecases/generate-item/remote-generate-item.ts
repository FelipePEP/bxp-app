import { ItemModel } from '@/domain/models/item-model'
import { GenerateItem } from '@/domain/usecases/generate-item'
import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { InvalidParamsError } from '@/domain/error/invalid-params'

export class RemoteGenerateItem implements GenerateItem {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<GenerateItem.params, ItemModel>
  ) {}

  async randomize (params: GenerateItem.params): Promise<GenerateItem.model> {
    let item: ItemModel
    const response = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (response.statusCode) {
      case HttpStatusCode.badRequest:
        throw new InvalidParamsError()
      default:
        return item
    }
  }
}
