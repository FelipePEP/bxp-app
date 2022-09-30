import { WeaponModel } from '@/domain/models/weapon-model'
import { GenerateWeapon } from '../../../domain/usecases/generate-weapon'
import { HttpPostClient } from '../../protocols/http/http-post-client'

export class RemoteGenerateWeapon implements GenerateWeapon {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async randomize (params: GenerateWeapon.params): Promise<GenerateWeapon.model> {
    let weapon: WeaponModel
    await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    return weapon
  }
}
