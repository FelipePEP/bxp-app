import { MagicWeaponModel } from '../models/magic-weapon-model'

type generateWeaponParams = {
  level: number
}

export interface IgenerateWeapon {
  randomize (params: generateWeaponParams): MagicWeaponModel
}
