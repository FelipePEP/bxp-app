import React from 'react'
import Styles from './home-styles.scss'
import GridCard from '../components/grid-card'

const Home: React.FC = () => {
  return (

    <>
      <div className={Styles.gridmenu}>
        <GridCard label="Arsenal mágico" className={Styles.thumbmenu}/>
        <GridCard label="Demônio" className={Styles.thumbmenu}/>
        <GridCard label="Tesouro" className={Styles.thumbmenu}/>
        <GridCard label="Dungeon" className={Styles.thumbmenu}/>
      </div>
    </>
  )
}

export default Home
