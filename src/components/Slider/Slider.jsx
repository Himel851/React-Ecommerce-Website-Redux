
import React from 'react';
import "./Slider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderImages } from '../../utils/images';

const SliderImg = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="hero-slider">
      <Slider {...settings}>
        <div className='hero-slider-item'>
          <img src={sliderImages[0]} alt="" />
        </div>
        <div className='hero-slider-item'>
          <img src={sliderImages[1]} alt="" />
        </div>
        <div className='hero-slider-item'>
          <img src={sliderImages[2]} alt="" />
        </div>
      </Slider>

    </div>
  )
}

export default SliderImg