import React from 'react'
import styles from '../styles/ChoiceCard.module.css'


const ChoiceCard = ({src,head,text}) => {
  return (
    <div className={styles.choice_card}>
      <div className={styles.card_image}>
        <img src={src} alt=''></img>
      </div>
      <div className={styles.card_text}>
        <h2>{head}</h2>
        <p>{text}</p>
     </div>
    </div>
  )
}

export default ChoiceCard