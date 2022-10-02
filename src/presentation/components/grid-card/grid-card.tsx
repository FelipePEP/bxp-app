import React from 'react'
import Styles from './grid-card-styles.scss'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const GridCard: React.FC<Props> = (props: Props) => {
  return (
    <div className={Styles.card}>
      <button {...props} />
    </div>
  )
}

export default GridCard
