"use client"
// components/Carousel.js
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';
import { MdKeyboardArrowLeft } from "react-icons/md";

import { MdKeyboardArrowRight } from "react-icons/md";

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import { Grid } from '@mui/material';
import Card from "../card/Cards"

export default function App({ data }) {


    return (
        <div>

            <Grid container className="flex justify-center">
                <Grid item xs={12} lg={10.8}>
                    <h1 className='font-bold text-2xl my-4' style={{ color: "rgb(30, 65, 100)" }}>
                        Recommended                    </h1>

                    <div className="relative">
                        <Swiper
                            spaceBetween={20}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                            id='swiper-1'
                            breakpoints={{
                                // Adjust the number of slides per view at different screen widths
                                320: {
                                    slidesPerView: 1, // Mobile screens
                                },
                                640: {
                                    slidesPerView: 2, // Tablet screens
                                },
                                768: {
                                    slidesPerView: 3, // Medium screens
                                },
                                1024: {
                                    slidesPerView: 3, // Large screens
                                },
                            }}
                        >
                            {
                                data.map((ele, index) => (
                                    <SwiperSlide key={index}>
                                        <Card property={ele} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>

                        {/* Previous Button */}
                        <div className="swiper-button-prev absolute top-1/2 left-2 transform  z-10 cursor-pointer text-white bg-black rounded-full p-1 w-[25px]">
                            <MdKeyboardArrowLeft />
                        </div>

                        {/* Next Button */}
                        <div className="swiper-button-next absolute top-1/2 right-2 transform  z-10 cursor-pointer text-white bg-black rounded-full p-1 w-[25px]">
                            <MdKeyboardArrowRight />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
