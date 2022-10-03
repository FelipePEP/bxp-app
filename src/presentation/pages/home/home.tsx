import React from 'react'
import Styles from './home-styles.scss'
import GridCard from '../../components/grid-card/grid-card'

const Home: React.FC = () => {
  return (
    <>
      <div className={Styles.gridmenu}>
        <GridCard route="/item">Item</GridCard>
        <GridCard route="/">Demônio</GridCard>
        <GridCard route="/">Tesouro</GridCard>
        <GridCard route="/">Dungeon</GridCard>
      </div>
    </>
  )
}

export default Home
