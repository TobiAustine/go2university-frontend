import React from 'react'
import {Helmet} from 'react-helmet'
import styles from "../styles/Contactus.module.css";
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'



const Contact = () => {
  return (
<>
     <Helmet>
     <title>Contact Us | Go2Uni</title>
        <meta name="contact us" content="Contact us through the following medium" />
        <link rel="icon" href="/Images/logo.png" />
     </Helmet>

     <div className={styles.contact}>

     <div className={styles.contact_container}>

     <div className={styles.contact_head}> 
     <h2>CONTACT US</h2>
     <p>Any comment or remarks? Please contact us via any of these <br /> platforms</p>
      </div>
   
    <div className={styles.contact_body}>



    <div className={styles.contact_left}>
    <div className={styles.contact_phone}>
      <BsFillTelephoneFill color='#FABD17'></BsFillTelephoneFill>

      <a href="tel:08066821089">08066821089</a>
      
    </div>  

    <div className={styles.contact_mail}>
      <AiOutlineMail color='#FABD17'></AiOutlineMail>
      <a href = "mailto: contactus@gmail.com">Contactus@gmail.com</a>
    </div>  



    </div>

    <div className={styles.contact_right}>
      <form action="">
      <div className={styles.email}>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="subject" id="" />

      </div>

      <div className={styles.subject}>
      <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" id="" />
        
      </div>

      <div className={styles.contact_mail}>
      <label htmlFor="message">Message</label>
        <input type="text" name="message" id="" />
      </div>

      <button type='submit'>Send Message</button>
      
   



      </form>

    </div>







    </div>
    </div>
    </div>
     
</>

  )
}

export default Contact