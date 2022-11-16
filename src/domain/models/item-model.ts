import { ItemFeatureModel } from './item-feature-model'

export type ItemModel = {
  description: string
  name: string
  type: string
  quality: string
  classRestricted: string
  features: ItemFeatureModel[]
  price: number
  encumbrance: number
  rarity: string
  slots: number
  armorType: string
  weaponType: string
};
