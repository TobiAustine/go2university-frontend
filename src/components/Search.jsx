import React from 'react'
import styles from '../styles/Search.module.css'
import {AiOutlineSearch} from 'react-icons/ai'
import vector1 from '../Images/Vector1.png'
import ellipse from '../Images/Ellipse27.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Search = () => {
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
    <div className={styles.search}>
        <div className={styles.search_container}>
            <div className={styles.search_head} data-aos='fade-down'>
                <h2>What do you need help with? <span>We&apos;ve got you covered</span></h2>
            </div>
            <div className={styles.search_body}>
                <p>We have materials at your disposal, it takes just a search.</p>
            </div>
            <div className={styles.search_input} data-aos='fade-up'>
               <input type="text" className={styles.searchbar} placeholder='Search for a topic...'/>
               <div className={styles.search_icon}>
                    <AiOutlineSearch></AiOutlineSearch>
               </div>
            </div>
            
        <div className={styles.line1}>
        <img src={vector1} width={250} height={20} alt=''></img>
      </div>
      <div className={styles.line2}>
        <img src={vector1} width={250} height={20} alt=''></img>
      </div>
      <div className={styles.ellipse}>
        <img src={ellipse} width={30} height={30} alt=''></img>
      </div>

        </div>
      
    </div>
  )
}

export default Search