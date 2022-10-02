import React from 'react'
import Styles from './home-styles.scss'
import GridCard from '../../components/grid-card/grid-card'

const Home: React.FC = () => {
  return (
    <>
      <div className={Styles.gridmenu}>
        <GridCard>Arsenal</GridCard>
        <GridCard>Demônio</GridCard>
        <GridCard>Tesouro</GridCard>
        <GridCard>Dungeon</GridCard>
      </div>
    </>
  )
}

export default Home
