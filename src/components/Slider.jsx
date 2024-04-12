import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

const Slider = () => {
  return (
    <OwlCarousel className="owl-theme slider" loop margin={10} items={1} autoplay autoplayTimeout={2000}>
      <div className="item">
        <img src={slider1} alt="" className="w-100 object-cover" />
      </div>
      <div className="item">
        <img src={slider2} alt="" className="w-100 object-cover" />
      </div>
      <div className="item">
        <img src={slider3} alt="" className="w-100 object-cover" />
      </div>
    </OwlCarousel>
  );
};

export default Slider;
