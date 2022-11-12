import React from 'react'
import {Helmet} from 'react-helmet'
import styles from "../styles/AboutGo2Uni.module.css";
import {Link} from "react-router-dom";
import about from "../Images/aboutus.png"
import image6 from "../Images/image6.png"
import image4 from "../Images/image4.png"


const About = () => {
  return (
     <>
     <Helmet>
     <title>About Us | Go2Uni</title>
        <meta name="About Go2Uni" content="Get to know about more fun and interesting ways to prepare for university entrance exams in Nigeria" />
        <link rel="icon" href="/Images/logo.png" />
     </Helmet>
    
     <div className={styles.about}>
      <div className={styles.about_banner}>
        <img src={about} alt="About Us"></img>
      </div>

   

      <div className={styles.about_main}>
        
        <div className={styles.about_text}>
          <p>
            Go2uni is an educational platform and academic social network
            targeted at Nigerian senior secondary school students to aid their
            preparation for university entry exams. Go2uni is a high quality,
            resource-packed, innovative and very affordable learning platform.
          </p>

          <p>
            We offer innovative solutions to the high cost of
            education, traditional learning and fallen standard of education.
          </p>

            <div className={styles.inline_images}>

          <div className={styles.inline_image} >
            <img
              src={image6}
              alt="About Us"
             
            ></img>
          </div>
         

          <div className={styles.inline_image} >
            <img
              src={image4}
              alt="About Us"
             
            ></img></div> 
            
            </div>







          <h2>How It  Works</h2>

          <p>
            With educational content, resources and tutors, Go2uni offers
            students everything they need in one place. Lectures, Knowledge based
            test, opportunity to chat with tutors and also study groups where
            students get to interact and share ideas regarding a certain topic
            or challenge and help each other overcome such challenges. <br />{" "}
            <br /> With easy access to joining, kick start your learning
            possibilities with Go2uni and be the best you ought to be.{" "}


          </p>

          <Link to='/signup'>Get Started</Link>
        </div>

        <div className={styles.about_images}>

           <div className={styles.about_image} >
            <img
              src={image6}
              alt="About Us"
            
            ></img>
          </div>

          <div className={styles.about_image}>
            <img
              src={image4}
              alt="About Us"
            
            ></img> 
          </div>

        </div>

      </div>
    </div>
     
     
     </>
  )
}

export default About