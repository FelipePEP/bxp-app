import { FakeGenerateItem } from '@/API/fakeControllers/fake-generate-item'
import { ItemModel } from '@/domain/models/item-model'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Styles from './magic-item-styles.scss'

const MagicItem: React.FC = (GenerateItem) => {
  const [formData, setFormData] = useState({
    classRestricted: 'Qualquer',
    type: 'Qualquer',
    rarity: 'Qualquer'
  })

  const [newItem, setNewItem] = useState<ItemModel>({
    type: '',
    name: '',
    description: '',
    quality: 'default',
    classRestricted: null,
    features: [],
    price: 0,
    encumbrance: 0,
    rarity: '',
    armorType: null,
    weaponType: null,
    slots: 0

  })

  const [description, setDescription] = useState([])

  const generate = (e: any): any => {
    e.preventDefault()
    setDescription([])
    setNewItem(new FakeGenerateItem().generate(formData))
    return null
  }

  useEffect(() => {
    for (let index = 0; index < newItem.features.length; index++) {
      const el = newItem.features[index]
      setDescription(description => [...description, (`${el.name} (${el.value})`)])
    }
  }, [newItem])
  return (
    <>
      <h1>Randomize Magic Item</h1>
      <form onSubmit={generate}>
        <div className={Styles.card}>
          <label>Classe</label>
          <select onChange={(e) => setFormData(prev => { return { ...prev, classRestricted: e.target.value } })}>
            <option value="Qualquer">Qualquer</option>
            <option value="Assassino">Assassino</option>
            <option value="Bárbaro">Bárbaro</option>
            <option value="Caçador">Caçador</option>
            <option value="Druida">Druida</option>
            <option value="Guerreiro">Guerreiro</option>
            <option value="Mago">Mago</option>
            <option value="Monge">Monge</option>
            <option value="Necromante">Necromante</option>
            <option value="Paladino">Paladino</option>
          </select>
        </div>
        <div className={Styles.card}>
          <label>Tipo do item</label>
          <select onChange={(e) => setFormData(prev => { return { ...prev, type: e.target.value } })}>
            <option value="Qualquer">Qualquer</option>
            <option value="weapon">Arma</option>
            <option value="armor">Armadura e vestimenta</option>
            <option value="head">Elmos e chapéus</option>
            <option value="utility">Acessório e joias</option>
            <option value="gem">Gemas e runas da alma</option>
            <option value="talisman">Amuletos e fetiches</option>
          </select>
        </div>
        <div className={Styles.card}>
          <label>Raridade do item</label>
          <select onChange={(e) => setFormData(prev => { return { ...prev, rarity: e.target.value } })}>
            <option value="Qualquer">Qualquer</option>
            <option value="Comum">Comum</option>
            <option value="Incomum">Incomum</option>
            <option value="Raro">Raro</option>
            <option value="Lendário">Lendário (único)</option>
          </select>
        </div>
        {newItem.rarity &&
        <div className={Styles.itemwrapper}>
          <h1>{newItem.description}</h1>
          <span>{newItem.type} - {newItem.rarity} </span>
          <h2>Poderes</h2>
          <ul>{description.map((a, i) => {
            return (<li key={i}>{a}</li>)
          })}</ul>
          <h2>Espaço para gemas</h2>
          <ul>{newItem.slots}</ul>
        </div>
        }
        <div className={Styles.button}>
          <button type="submit" >Criar novo </button>
        </div>
        <div className={Styles.button}>
          <Link to='/'>
            <button className={Styles.backButton}>
              Voltar
            </button>
          </Link>
        </div>
      </form>
    </>
  )
}

export default MagicItem
