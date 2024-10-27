"use client";


import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Slider, { MysecondSlider } from "./slider";



export default function Slideshow() {
  return (
    <div className="slide-container">
      <Fade duration={3000} transitionDuration={1000} >
        <Slider />
        <MysecondSlider />
      </Fade>
    </div>
  );
}
