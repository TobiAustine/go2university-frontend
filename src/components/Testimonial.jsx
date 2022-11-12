import React from 'react'
import styles from '../styles/Testimonial.module.css'
import {FaStar, FaStarHalfAlt} from 'react-icons/fa'
import image3 from '../Images/image3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Testimonial() {

    

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
      duration: 3000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });
  }, [])
  return (
    <div className={styles.testimonial}>
        <div className={styles.testimonial_container}>
        <div className={styles.testimonial_head} data-aos="fade-down">
            <h2>WHAT OUR STUDENTS SAY ABOUT US</h2>
        </div>

        <div className={styles.testimonial_body} data-aos="fade-up">

        <div className={styles.testimonial_text}>
                    <h2>Stella Smith</h2>
                    <p>Go2uni made understand the principles behind Algebra. I always thought i would never love mathematics.Thank you Go2uni.  </p>
                    <div className={styles.testimonial_ratings}>
                        <FaStar color='var(--primary-color)' size={20}></FaStar>
                        <FaStar color='var(--primary-color)' size={20}></FaStar>
                        <FaStar color='var(--primary-color)' size={20}></FaStar>
                        <FaStar color='var(--primary-color)' size={20}></FaStar>
                        <FaStarHalfAlt color='var(--primary-color)' size={20}></FaStarHalfAlt>
                    </div>
            </div>

            <div className={styles.testimonial_image}>
                <img src={image3} width={200} height={210} objectFit='cover' alt='' classname={styles.img}></img>
            </div>
            
            </div>
        </div>
        </div>
  )
}

export default Testimonial