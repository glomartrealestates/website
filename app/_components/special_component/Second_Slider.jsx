"use client";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SmSlider, { SmSlider2 } from "./SmSlider";

export default function Slideshow2() {
  return (
    <div className="slide-container">
      <Fade duration={3000} transitionDuration={1000}>
        <SmSlider />
        <SmSlider2 />
      </Fade>
    </div>
  );
}
