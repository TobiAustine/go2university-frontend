import React from 'react'
import styles from '../styles/Card.module.css'
import {Link} from 'react-router-dom'

const Card = ({src, background, department}) => {
  return (
    <div className={styles.card_container}>
        <div className={styles.card} style={background={background}}>
        <img src={src} alt=''></img>
        </div> 
        <div className={styles.department}>
           <Link href='/'>{department}</Link> 
        </div>
        
   
    </div>
  )
}

export default Card