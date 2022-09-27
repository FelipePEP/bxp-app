import { WeaponModel } from '../models/weapon-model'

type generateWeaponParams = {
  level: number
}

export interface IgenerateWeapon {
  randomize (params: generateWeaponParams): Promise<WeaponModel>
}
