import { ItemModel } from '@/domain/models/item-model'

export namespace GenerateItem {
  export type model = ItemModel
  export type params = {
    level?: number
  }
}
export interface GenerateItem {
  randomize (params: GenerateItem.params): Promise<ItemModel>
}
