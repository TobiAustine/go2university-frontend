import React from 'react'
import Trendcard from './Trendcard'

import Body from '../Images/human.png'
import account from '../Images/account.png'
import math from '../Images/math.png'
import {IoIosArrowDropright} from 'react-icons/io'
import {Link} from 'react-router-dom'

// import Swiper, { Navigation, Pagination } from 'swiper';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

//import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from '../styles/Trend.module.css'

const Trend = () => {

    //   const swiper = new Swiper('.swiper', {

    //      // configure Swiper to use modules
    //      modules: [Navigation, Pagination],


    //     // Optional parameters
    //     // direction: 'vertical',
    //     // loop: true,
      
    //     // If we need pagination
    //     pagination: {
    //       el: '.swiper-pagination',
    //     },
      
    //     // Navigation arrows
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
      
    //     // And if we need scrollbar
    //     scrollbar: {
    //       el: '.swiper-scrollbar',
    //     },

    //     slidesPerView: 2,
    //     spaceBetween: 5,
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     },
    //     breakpoints: {
    //       640: {
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //       },
    //       768: {
    //         slidesPerView: 4,
    //         spaceBetween: 40,
    //       },
    //       1024: {
    //         slidesPerView: 2,
    //         spaceBetween: 50,
    //       },
    //     }
    //   });



  return (
    <div className={styles.trend}>
        <div className={styles.trend_container}>
                <h1>Trending Topics</h1>

        <div className={styles.trend_cards}>

        <div className={styles.swiper}> 
    
     <Swiper 
      // install Swiper modules
      modules={[Navigation, Pagination,A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}

      breakpoints={{
        //>=340px
        450:{
            
            slidesPerView:1,
            spaceBetween:200
        },
        //>=768px
        768:{
            width:768,
            slidesPerView:3,
            spaceBetween:20
        },
        //>=1040px
        1040:{
            width:1040,
            slidesPerView:3,
            spaceBetween:40
        },
      }}

    //   scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >


        <div className={styles.swiper_wrapper}>
      <SwiperSlide className={styles.swiper_slide}><Trendcard src={Body} topic='The Human Body' subject='Biology'></Trendcard></SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}><Trendcard src={account} topic='Principles of Double Entry' subject='Accounting'></Trendcard></SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}><Trendcard src={math} topic='Algebraic equations' subject='Mathematics'></Trendcard></SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}><Trendcard src={Body} topic='The Human Body' subject='Biology'></Trendcard></SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}><Trendcard src={account} topic='Principles of Double Entry' subject='Accounting'></Trendcard></SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}><Trendcard src={math} topic='Algebraic equations' subject='Mathematics'></Trendcard></SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}><Trendcard src={Body} topic='The Human Body' subject='Biology'></Trendcard></SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}><Trendcard src={account} topic='Principles of Double Entry' subject='Accounting'></Trendcard></SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}><Trendcard src={math} topic='Algebraic equations' subject='Mathematics'></Trendcard></SwiperSlide>
      </div>
    </Swiper>

    </div>

      </div>

      <div className={styles.more_topics}>
          <Link href='/topics'><a> See more topics <IoIosArrowDropright></IoIosArrowDropright>
            
            </a></Link>
      </div>
    


      </div>
    </div>
  )
}

export default Trend