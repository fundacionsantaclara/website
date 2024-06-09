import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TallerCarousel.css'
import Carousel1 from "../Fcimages/TallerCaro1.jpg"
import Carousel2 from "../Fcimages/TallerCaro2.jpg"
import Carousel3 from "../Fcimages/TallerCaro3.jpg"
import Carousel4 from "../Fcimages/TallerCaro4.jpg"
import Carousel5 from "../Fcimages/TallerCaro5.jpg"



const TallerCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
  
    return (
      <div className="carousel-container">
        <Slider {...settings}>
          <div className="carousel-item">
            <img src={Carousel1} alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={Carousel2} alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={Carousel3} alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={Carousel4} alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={Carousel5} alt="Slide 2" />
          </div>
        </Slider>
      </div>
    );
  };
  
export default TallerCarousel
