import { WeaponFeatureModel } from "./weapon-feature-model";

export type WeaponModel = {
  pts: number
  description: string
  level: number
  name: string
  type: string
  quality: string
  classRestricted: string
  baseAttack: number  
  features: [WeaponFeatureModel]
  price: number
};
