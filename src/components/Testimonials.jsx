import React, {useState} from 'react'
import styles from '../styles/Testimonials.module.css'
import {FaStar, FaStarHalfAlt} from 'react-icons/fa'
import image3 from '../Images/image3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// import Testimonial from './Testimonial';
import {testimonials} from '../data'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'

function Testimonials() {

    const [index, setIndex] = useState(0)
    const {name, quote, job, image} = testimonials[index]

    const slideRight = () => {
      setIndex(index + 1)
      if(index >= testimonials.length -1 ){
        setIndex(0)
      }
    }
  
    const slideLeft = () => {
      setIndex(index - 1)
      if(index <= 0){
        setIndex(testimonials.length - 1)
      }
    }

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


        <div  className={styles.testimonial_image}>
           <img src={image} alt="" />
        </div>
       
        <p>{quote}</p>
        <h2>{name}</h2>





        
          {/* <Testimonial></Testimonial> */}

    
            
            </div>


              
        <div className={styles.icons}>
        <IoIosArrowDropleftCircle color='#fabd17' size={50} onClick={slideLeft}></IoIosArrowDropleftCircle >

        <IoIosArrowDroprightCircle color='#fabd17' size={50} onClick={slideRight}></IoIosArrowDroprightCircle>

          </div>



        </div>
        </div>
  )
}

export default Testimonials