import { itemFeatureModel } from "./item-feature-model";

export type itemModel = {
  pts: number
  description: string
  level: number
  name: string
  type: string
  quality: string
  classRestricted: string
  baseAttack: number  
  features: [itemFeatureModel]
  price: number
};