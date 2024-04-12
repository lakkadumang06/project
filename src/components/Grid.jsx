import React from "react";
import "./Grid.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Grid = () => {
  return (
    <div className="main_grid d-none d-xl-block">
      <div className="grid">
        <div className="grid_img1">
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <img src={img1} alt="" />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <img src={img3} alt="" />
          </AnimationOnScroll>
        </div>
        <div className="grid_img2">
          <AnimationOnScroll animateIn="animate__fadeInRight">
            <img src={img2} alt="" height={296} />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <img src={img4} alt="" />
          </AnimationOnScroll>
        </div>
        <div className="grid_img3">
          <AnimationOnScroll animateIn="animate__fadeInRight">
            <img src={img6} alt="" height={500} />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInRight">
            <img src={img5} alt="" />
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Grid;
