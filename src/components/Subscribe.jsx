import React from 'react'
import styles from '../styles/Subscribe.module.css'
import {TiLocationArrow} from 'react-icons/ti'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Subscribe = () => {
    
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
    <div className={styles.subscribe}>
        <div className={styles.subscribe_container}>
            <div className={styles.subscribe_head} data-aos="fade-right">
                <h2>Receive new articles and resources directly to your mail.</h2>
                <h2>Fill in your email address below to join our email newsletter.</h2>
            </div>
            <div className={styles.subscribe_body} data-aos="fade-up" data-aos-duration="3000">
                
                <input type="email" name="" id="" placeholder='Subscribe to our Newsletter' />
            
                    <div className={styles.subscribe_icon}>
                      <button type="submit"> <TiLocationArrow size={35} ></TiLocationArrow></button>
                        
                    </div>
                    
                   
            </div>

        </div>
        
        </div>
  )
}

export default Subscribe