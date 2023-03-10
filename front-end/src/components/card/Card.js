import React from 'react'
import styles from "./Card.module.scss"

const Card = ({children, cardClass}) => {
  return (
    <div className={`${styles.card} ${cardClass} ${styles.card2}` }>
        {children}
    </div>
  )
}

export default Card