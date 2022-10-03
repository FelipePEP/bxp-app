import React from 'react'
import { GenerateItem } from '@/domain/usecases/generate-item'

const MagicItem: React.FC = (GenerateItem) => {
  return (
    <>
      <h1>Magic Item</h1>
      <form>
        <div>
          <label>Nível</label>
          <input type="number" max="10"></input>
        </div>
        <div>
          <label>Tipo</label>
          <select>
            <option value="1">Arma</option>
            <option value="2">Armadura</option>
            <option value="3">Cabeça</option>
            <option value="4">Acessório</option>
            <option value="5">Gema</option>
            <option value="6">Amuleto</option>
          </select>
        </div>
        <input type="submit"></input>
      </form>
    </>
  )
}

export default MagicItem
