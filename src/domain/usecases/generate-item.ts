import { itemModel } from '@/domain/models/item-model'

export namespace GenerateItem {
  export type model = itemModel
  export type params = {
    level?: number
  }
}
export interface GenerateItem {
  randomize (params: GenerateItem.params): Promise<itemModel>
}
