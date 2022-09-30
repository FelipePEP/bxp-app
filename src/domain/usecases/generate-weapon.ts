import { WeaponModel } from '../models/weapon-model'

export namespace GenerateWeapon {
  export type model = WeaponModel
  export type params = {
    level?: number
  }
}
export interface GenerateWeapon {
  randomize (params: GenerateWeapon.params): Promise<WeaponModel>
}
