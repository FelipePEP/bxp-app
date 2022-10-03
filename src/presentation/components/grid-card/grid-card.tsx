import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import Styles from './grid-card-styles.scss'

// type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type Props = {
  route: string
}
const GridCard: React.FC<PropsWithChildren<Props>> = (props: any) => {
  return (
    <div className={Styles.card}>
      <Link to={props.route}>
        <label>
          {props.children}
        </label>
      </Link>
    </div>
  )
}

export default GridCard
