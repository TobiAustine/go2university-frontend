import React from 'react'
import styles from '../styles/Statistics.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Statistics = () => {
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
    <div className={styles.statistics}>
        <div className={styles.statistics_container} data-aos="fade-right">
            <div className={styles.statistic}>
                <h1>10000+</h1>
                <h4>Active Students</h4>
            </div>

            <div className={styles.statistic}>
                <h1>4500+</h1>
                <h4>Up to Date Courses</h4>
            </div>

            <div className={styles.statistic}>
                <h1>300+</h1>
                <h4>Dedicated tutors</h4>
            </div>
        </div>
        
    </div>
  )
}

export default Statistics