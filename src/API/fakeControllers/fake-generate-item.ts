import { ItemFeatureModel } from '@/domain/models/item-feature-model'
import { ItemModel } from '@/domain/models/item-model'
import { fakeRarities } from '../fakeDB/fake-rarities'
import { fakeFeatures } from '../fakeDB/fake-features'

export class FakeGenerateItem {
  item?: ItemModel
  rarity?: any
  grads?: number

  generate (params: any): ItemModel {
    this.item = {
      armorType: null,
      weaponType: null,
      type: params.type,
      name: '',
      description: '',
      quality: 'default',
      classRestricted: null,
      features: [],
      price: 0,
      encumbrance: 0,
      rarity: params.rarity,
      slots: 0
    }
    if (this.item.classRestricted === 'Qualquer' && this.rollDice(100) <= 20) {
      this.defineClassRestriction()
    }

    this.item.type = this.defineType(this.item.type)
    this.item.rarity = (this.item.rarity === 'Qualquer') ? this.defineRarity() : this.item.rarity
    this.rarity = fakeRarities.find(r => r.name === this.item.rarity)
    this.item.features = this.defineFeatureList()
    this.item.description = this.defineName()
    return this.item
  }

  rollDice (diceSize: number): number {
    const diceResult: number = Math.floor(Math.random() * diceSize) + 1
    return diceResult
  }

  defineClassRestriction (): any {
    const d9 = this.rollDice(9)
    switch (d9) {
      case 1:
        console.log('Druida')
        break
      case 2:
        console.log('Mago')
        break
      case 3:
        console.log('Necromante')
        break
      case 4:
        console.log('Bárbaro')
        break
      case 5:
        console.log('Monge/Hexblade')
        break
      case 6:
        console.log('Paladino')
        break
      case 7:
        console.log('Assassino')
        break
      case 8:
        console.log('Caçador')
        break
      case 9:
        console.log('Guerreiro')
        break
      default:
        break
    }
    return null
  }

  defineType (type: string): string {
    let value: string | number = type
    let result
    if (type === 'Qualquer') {
      const d100 = this.rollDice(100)
      value = Math.floor(d100 / 10)
    }
    switch (value) {
      case 0:
      case 'gem':
        result = 'gem'
        this.item.name = this.defineGemColor()
        break
      case 1:
      case 2:
      case 3:
      case 'weapon':
        result = 'weapon'
        this.item.name = this.defineWeaponType()
        break
      case 4:
      case 5:
      case 'armor':
        result = 'armor'
        this.item.name = this.defineArmorType()
        break
      case 6:
      case 'head':
        result = 'head'
        this.item.name = this.defineHeaderType()
        break
      case 7:
      case 8:
      case 'utility':
        result = 'utility'
        this.item.name = this.defineUtilityType()
        break
      case 9:
      case 10:
      case 'talisman':
        result = 'talisman'
        this.item.name = this.defineTalisman()
        this.item.encumbrance = this.defineEncumbrance()
        break
      default:
        break
    }
    return result
  }

  defineRarity (): string {
    const d100 = this.rollDice(100)
    let result = null
    if (d100 === 100) {
      result = 'Lendário'
    } else if (d100 >= 95) {
      result = 'Raro'
    } else if (d100 >= 80) {
      result = 'Raro'
    } else if (d100 >= 51) {
      result = 'Incomum'
    } else {
      result = 'Comum'
    }
    return result
  }

  defineFeatureList (): ItemFeatureModel[] {
    const featList: ItemFeatureModel[] = []
    let excludedList = ''
    const compositionSelected = this.rarity.powers[this.rollDice(4) - 1]
    for (let index = 0; index < compositionSelected.length; index++) {
      if (compositionSelected[index] === 0) {
        this.item.slots++
      } else {
        const rarityId = (index < this.rarity.powersFixedRarity[0])
          ? this.rarity.powersFixedRarity[1]
          : this.rollDice(this.rarity.powersFixedRarity[1] - 1)
        if (this.item.armorType) {
          fakeFeatures.forEach(i => {
            if (i.armor && i.armorType.indexOf(this.item.armorType) === -1) {
              excludedList += `, ${i.id}`
            }
          })
        } else if (this.item.weaponType) {
          fakeFeatures.forEach(i => {
            if (i.weapon && i.weaponType.indexOf(this.item.weaponType) === -1) {
              excludedList += `, ${i.id}`
            }
          })
        }
        const feat = this.sortFeature(
          rarityId,
          compositionSelected[index],
          excludedList
        )
        excludedList += `, ${feat.id}`
        featList.push(feat)
      }
    }
    return featList
  }

  sortFeature (rarityId: number, grad: number, excludedList: string): ItemFeatureModel {
    const list = fakeFeatures.filter(i => i.rarity === rarityId && i[this.item.type] === true && !excludedList.includes(`${i.id}`))
    const selected = list[this.rollDice(list.length) - 1]
    return {
      id: selected.id,
      description: selected.description,
      grad: grad,
      name: selected.name,
      value: selected.grads[grad - 1],
      pts: 1
    }
  }

  // TODO
  defineEncumbrance (): any {
    const d4 = this.rollDice(4)
    let result
    switch (d4) {
      case 1:
      case 2:
        result = 1
        break
      case 3:
        result = 2
        break
      case 4:
        result = 0
        break
      default:
        break
    }
    return result
  }

  defineGemColor (): any {
    const d4 = this.rollDice(4)
    let result
    switch (d4) {
      case 1:
        result = 'Rubi'
        break
      case 2:
        result = 'Esmeralda'
        break
      case 3:
        result = 'Safira'
        break
      case 4:
        result = 'Topázio'
        break
      case 5:
        result = 'Diamante'
        break
      case 6:
        result = 'Ametista'
        break
      case 7:
        result = 'Obsidiana'
        break
      default:
        break
    }
    return result
  }

  defineUtilityType (): any {
    const d12 = this.rollDice(12)
    let result
    switch (d12) {
      case 1:
      case 2:
        result = 'Anel'
        break
      case 3:
        result = 'Colar'
        break
      case 4:
        result = 'Medalhão'
        break
      case 5:
        result = 'Brinco'
        break
      case 6:
        result = 'Pulseira'
        break
      case 7:
      case 8:
        result = 'Luva'
        break
      case 9:
      case 10:
        result = 'Bota'
        break
      case 11:
        result = 'Broche'
        break
      case 12:
        result = 'Sandália'
        break
      case 13:
        result = 'Capa'
        break
      case 14:
        result = 'Quilt'
        break
      case 15:
        result = 'Manopla'
        break
      default:
        break
    }

    return result
  }

  defineHeaderType (): any {
    const d12 = this.rollDice(12)
    let result
    switch (d12) {
      case 1:
      case 2:
        result = 'Gorro'
        break
      case 3:
        result = 'Capuz de lobo'
        break
      case 4:
        result = 'Chapéu de ferro'
        break
      case 5:
        result = 'Capacete viking'
        break
      case 6:
        result = 'Capacete spartano'
        break
      case 7:
      case 8:
        result = 'Elmo romano'
        break
      case 9:
      case 10:
        result = 'Elmo selado'
        break
      case 11:
        result = 'Bandana '
        break
      case 12:
        result = 'Turbante'
        break
      default:
        break
    }

    return result
  }

  defineArmorType (): any {
    const d20 = this.rollDice(26)
    let result
    switch (d20) {
      case 1:
      case 2:
      case 3:
        result = 'Túnica'
        this.item.armorType = 'leve'
        break
      case 4:
      case 5:
        result = 'Manto'
        this.item.armorType = 'leve'
        break
      case 6:
      case 7:
        result = 'Corselete de couro'
        this.item.armorType = 'leve'
        break
      case 8:
      case 9:
        result = 'Corselete de escamas leve'
        this.item.armorType = 'leve'
        break
      case 10:
      case 11:
        result = 'Corselete acolchoado'
        this.item.armorType = 'leve'
        break
      case 12:
      case 13:
        result = 'Gambeson'
        this.item.armorType = 'leve'
        break
      case 14:
        result = 'Armadura de escamas'
        this.item.armorType = 'pesada'
        break
      case 15:
        result = 'Cota de malha pesada'
        this.item.armorType = 'pesada'
        break
      case 16:
        result = 'Cota de talas pesada'
        this.item.armorType = 'pesada'
        break
      case 17:
        result = 'Cota de talas pesada'
        this.item.armorType = 'pesada'
        break
      case 18:
        result = 'Armadura de bronze pesada '
        this.item.armorType = 'pesada'
        break
      case 19:
        result = 'Armadura de placas pesada'
        this.item.armorType = 'pesada'
        break
      case 20:
        result = 'Armadura de batalha completa'
        this.item.armorType = 'pesada'
        break
      case 21:
        result = 'Escudo leve de madeira'
        this.item.armorType = 'escudo'
        break
      case 22:
        result = 'Escudo grande de madeira'
        this.item.armorType = 'escudo'
        break
      case 23:
        result = 'Broquel de bronze'
        this.item.armorType = 'escudo'
        break
      case 24:
        result = 'Escudo torre'
        this.item.armorType = 'escudo'
        break
      case 25:
        result = 'Escudo redondo de ferro'
        this.item.armorType = 'escudo'
        break
      case 26:
        result = 'Escudo torre de madeira'
        this.item.armorType = 'escudo'
        break
      default:
        break
    }
    return result
  }

  defineWeaponType (): any {
    const d12 = this.rollDice(12)
    switch (d12) {
      case 1:
      case 8:
        this.item.weaponType = 'distancia'
        break
      case 2:
      case 7:
      case 9:
        this.item.weaponType = 'leve'
        break
      case 3:
      case 6:
      case 10:
      case 11:
      case 12:
        this.item.weaponType = 'balanceada'
        break
      case 4:
        this.item.weaponType = 'grande'
        break
      case 5:
        this.item.weaponType = 'haste'
        break
      default:
        break
    }

    const d6 = this.rollDice(6)
    let weaponList
    switch (d6) {
      case 1:
        weaponList = ['Funda', 'Azagaia', 'Dardo', 'Faca de arremesso', 'Machadinha', 'Arco curto', 'Arco longo', 'Chakram', 'Besta leve', 'Besta pesada', 'Pistola', 'Funda', 'Bumerangue']
        break
      case 2:
        weaponList = ['Adaga', 'Punhal', 'Katar', 'Cajado', 'Machadinha', 'Espada curta', 'Sai', 'Tonfa', 'Chakram']
        break
      case 3:
        weaponList = ['Espada longa', 'Machado', 'Maça', 'Martelo de guerra', 'Sabre', 'Florete', 'Espada larga', 'Katana', 'Espada', 'Lâmina', 'Cimitarra', 'Kopesh', 'Espada']
        break
      case 4:
        weaponList = ['Montante', 'Machado de guerra', 'Mangual', 'Foice gigante', 'Picareta de guerra']
        break
      case 5:
        weaponList = ['Lança', 'Alabarda', 'Glaive']
        break
      default:
        break
    }
    return weaponList[this.rollDice(weaponList.length - 1)]
  }

  defineTalisman (): any {
    const list = ['Patoá', 'Amuleto', 'Carranca', 'Máscara', 'Cocar', 'Chocalho', 'Pandeiro', 'Pulseira', 'Símbolo sagrado', 'Figa', 'Trevo mágico', 'Relíquia sagrada', 'Raiz de Ente', 'Olhos de besta', 'moringa consagrada', 'Vela de 7 dias', 'Ervas feéricas', 'Fetiche de orvalho', 'Estatueta elemental', 'Santinho', 'Flor de lótus', 'Tamborete', 'Tábua sagrada', 'Obelisco', 'Cristal esotérico', 'Minério da lua', 'Pena de fênix', 'Escama de dragão']
    return list[this.rollDice(list.length - 1)]
  }

  defineName (): any {
    let result = this.item.name
    if (this.item.features.length > 0) {
      for (let index = 0; index < this.item.features.length; index++) {
        result += ' ' + this.item.features[index].description
      }
    } else {
      result += ' mágico(a)'
    }
    return result
  }
}
