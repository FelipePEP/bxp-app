import { WeaponModel } from '@/domain/models/weapon-model'
import { GenerateWeapon } from '@/domain/usecases/generate-weapon'
import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { InvalidParamsError } from '@/domain/error/invalid-params'

export class RemoteGenerateWeapon implements GenerateWeapon {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<GenerateWeapon.params, WeaponModel>
  ) {}

  async randomize (params: GenerateWeapon.params): Promise<GenerateWeapon.model> {
    let weapon: WeaponModel
    const response = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (response.statusCode) {
      case HttpStatusCode.badRequest:
        throw new InvalidParamsError()
      default:
        return weapon
    }
  }
}
