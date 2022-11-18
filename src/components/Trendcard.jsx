import React from 'react'
import styles from '../styles/TrendCard.module.css'
import {FiUser, FiStar} from 'react-icons/fi'


const Trendcard = ({src, topic, subject}) => {
  return (
    <div className={styles.trendcard_container}>
        <div className={styles.trendcard_container_image}>
            {/* <img src={src} alt="" />  */}
            <img src={src} alt="" ></img>           
        </div>

        <div className={styles.trendcard_container_topic}>
            <h2>{topic}</h2> 
        </div>
        <div className={styles.trendcard_container_subject}>
        <div className={styles.trendcard_container_subject_name}>
           <p>{subject}</p> 
        </div>
        <div className={styles.trendcard_container_subject_ratings}>
            <div className={styles.rating_user}>
                <div className={styles.rating_icon}>
                    <FiUser size={10}></FiUser>
                </div>
                <div className={styles.rating_stat}>
                    <p>536</p>
                </div>

            </div>
            <div className={styles.rating_stars}>
            <div className={styles.rating_icon}>
                    <FiStar size={10}></FiStar>
                </div>
                <div className={styles.rating_stat}>
                    <p>4.9</p>
                </div>
            </div>
        </div>
        </div>


    </div>
  )
}

export default Trendcard