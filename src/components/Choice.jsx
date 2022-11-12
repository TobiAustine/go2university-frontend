import React from 'react'
import styles from '../styles/Choice.module.css'
import ChoiceCard from './ChoiceCard'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import training from '../Images/training.png'
import video from '../Images/video1.png'
import study from '../Images/study.png'
import Afford from '../Images/affordable.png'


const Choice = () => {

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
    <div className={styles.choice}>
        <div className={styles.choice_container} data-aos='fade-up'>
            <div className={styles.choice_heading}>
                <h2>WHY CHOOSE US</h2>
                <p>Offering <span>INNOVATIVE</span> solutions to high cost of education, traditional learning and fallen standard of education.</p>
            </div>
            <div className={styles.choice_body}>
            <ChoiceCard src={training} head='24/7 tutor support' text='Our Tutors are readily available to give you the support you need'></ChoiceCard>
            <ChoiceCard src={video} head='Video Tutorials' text='Up-to-date video lessons for your learning convienience'></ChoiceCard>
            <ChoiceCard src={study} head='Student study group' text='Meet with like minds like you and collaborate to make learning fun'></ChoiceCard>
            <ChoiceCard src={Afford} head='Affordability' text='Watch lessons without having to break the bank'></ChoiceCard>
            </div>

        </div>
        </div>
  )
}

export default Choice