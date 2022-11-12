import React from 'react'
import styles from '../styles/About.module.css'
import {Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Rectangle1 from '../Images/Rectangle1.png'
import about from '../Images/about.png'
import Rectangle from '../Images/Rectangle.png'


const About = () => {

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 2000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });
  }, [])

  return (
    <div className={styles.about} >
        <div className={styles.about_container}>
            <div className={styles.about_image} data-aos="fade-right">
                  <div className={styles.image3}>
                <img src={Rectangle1} width={350} height={250} alt=''></img>
                </div>

                <div className={styles.image4}>
                <img src={Rectangle1} width={350} height={250} alt=''></img>
                </div>
                
                <div className={styles.image1}> 
                <img src={about} width={350} height={250} alt=''></img>
                </div>

                <div className={styles.image2}>
                <img src={Rectangle} width={350} height={250} alt=''></img>
                </div>

              
            </div>
            
            <div className={styles.about_text} data-aos="fade-left">
                <h2>ABOUT US</h2>
                <p>Go2uni is an educational platform and academic social network targeted at Nigerian senior secondary school students to aid their preparation for university entry exams.</p>
                <Link to='/about'>Know More About Us...</Link>
            </div>

        </div>
        
        
        </div>
  )
}

export default About