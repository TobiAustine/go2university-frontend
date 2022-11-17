import React from 'react'
import {ImQuotesLeft} from 'react-icons/im'

import { useState } from 'react'
import styles from '../styles/Testimonial.module.css'



const Testimonial = ({src,name,text}) => {
  return (
        <section className={styles.testimonial}>
            <div className={styles.testimonial_body}> 
          <img src={src} alt="" />
          <h3>{name}</h3>
          <p>{text}</p>
          
          
           </div>










        </section>



  )
}

export default Testimonial