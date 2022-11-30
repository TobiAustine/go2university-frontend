import React from 'react'
import {Helmet} from 'react-helmet'
import algebraic from "../Images/Algebraic.png" 
import integration from "../Images/Integration.png" 
import trig from "../Images/Trig.png"
import number from "../Images/Number.png" 
import styles from '../styles/Science.module.css'

const Science = () => {
  return (
     <>
     <Helmet>
     <title>Science | Go2Uni</title>
        <meta name="Science Go2Uni" content="" />
        <link rel="icon" href="/Images/logo.png" />
      </Helmet>


      <div className={styles.science}>
     <div className={styles.department}><h2>Sciences</h2></div>
     <div className={styles.state}>Welcome to the World of science. Choose a topic.</div>



      <div className={styles.grid_container}>

          <div className={styles.box_container}> 

            <div> <img src={algebraic} alt="Topic" width="300" height="200"></img> </div>
            
            <div className={styles.topic_text}> Algebraic Equation</div>
            <div className={styles.subject}>Mathematics </div> 
          </div>


          <div className={styles.box_container}>
            <div>
             <img src={integration}alt="Topic" width="300" height="200"></img> </div>
             
             <div className={styles.topic_text}>Integration & Differentiation</div><div className={styles.subject}>Mathematics </div>
          </div>


          <div className={styles.box_container}>
            <div> <img src={trig} alt="Topic" width="300" height="200"></img>
            </div>
            <div className={styles.topic_text}>Trigonometry</div><div className={styles.subject}>Mathematics </div> 
          </div>



          <div className={styles.box_container}>
            <div> <img src={number}alt="Topic" width="300" height="200"></img></div>
            <div className={styles.topic_text}>Number Base System</div><div className={styles.subject}>Mathematics </div> </div>
          





          <div className={styles.box_container}>
            <div><img src={trig} alt="Topic" width="300" height="200"></img>
            </div>
            <div className={styles.topic_text}>Trigonometry</div><div className={styles.subject}>Mathematics </div> </div>
          



          <div className={styles.box_container}>
            <div> <img src={number}alt="Topic" width="300" height="200"></img></div>
            <div className={styles.topic_text}>Number Base System</div><div className={styles.subject}>Mathematics </div> </div>
          




          <div className={styles.box_container}>
            <div><img src={algebraic} alt="Topic" width="300" height="200"></img></div> 

            <div className={styles.topic_text}>Algebraic Equation</div><div className={styles.subject}>Mathematics </div> </div>
            
             


          


            
            
           
          <div className={styles.box_container}>
            <div>
                
            <img src={integration}alt="Topic" width="300" height="200"></img> </div>

            <div className={styles.topic_text}>Integration & Differentiation</div><div className={styles.subject}>Mathematics </div> </div>
          



          <div  className={styles.box_container}>
            <div>
            
            <img src={algebraic} alt="Topic" width="300" height="200"></img> 
            </div>
            <div className={styles.topic_text}>Algebraic Equation</div><div className={styles.subject}>Mathematics </div> </div>
          



          <div  className={styles.box_container}>
            <div><img src={trig} alt="Topic" width="300" height="200"></img>
            </div>
            <div className={styles.topic_text}>Integration & Differentiation</div><div className={styles.subject}>Mathematics </div> </div>
          



          <div  className={styles.box_container}>
            <div> <img src={number}alt="Topic" width="300" height="200"></img></div>
            
            <div className={styles.topic_text}>Number Base System</div><div className={styles.subject}>Mathematics </div> </div>
          




          <div  className={styles.box_container}>
            <div>
            
            <img src={algebraic} alt="Topic" width="300" height="200"></img> 
            </div>
            <div className={styles.topic_text}>Algebraic Equation</div><div className={styles.subject}>Mathematics </div></div>
          




      </div>









    </div>

  
     
     
     
     </>
  )
}

export default Science