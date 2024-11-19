"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';
import { IoClose } from "react-icons/io5";

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Item } from '@radix-ui/react-select';

export default function App() {
    let [swiper , setSwiper] = useState(false)

    let data = [
    "https://s3.eu-central-1.amazonaws.com/prod.images.cooingestate.com/admin/property_image/image/164288/cleoWhatsApp_Image_2023-06-25_at_3.30.21_PM.jpeg" ,
    "https://s3.eu-central-1.amazonaws.com/prod.images.cooingestate.com/admin/property_image/image/164283/cleoWhatsApp_Image_2023-06-25_at_3.30.23_PM__1_.jpeg"
    ]
  return (
    <div className='relative'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        style={{right:swiper ? "0px" : "-100%"}}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mySwiperLeft"
      >
        <IoClose className='absolute right-5 top-5 text-xl cursor-pointer' onClick={()=>{
            setSwiper(false)
        }}/>
       {
        data.map((item , index ) =>{
            return(

                <SwiperSlide key={index} className=' py-14'> <img src={item} alt="..."  /></SwiperSlide>
               
            )
        })
       }
        
      </Swiper>
    </div>
  );
}
