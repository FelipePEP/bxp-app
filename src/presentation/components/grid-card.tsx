import React from 'react'

type Props = {
  label: string
  className: string
}
const GridCard: React.FC<Props> = (props: Props) => {
  return (
    <button className={props.className}>{ props.label }</button>
  )
}

export default GridCard
