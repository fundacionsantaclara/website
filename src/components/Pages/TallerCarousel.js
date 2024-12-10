import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TallerCarousel.css'
import Carousel1 from "../Fcimages/taller de las nines/carousel-products/Taller Carrusel 3.jpg"
import Carousel2 from "../Fcimages/taller de las nines/carousel-products/Taller Carrusel 1.jpg"
import Carousel3 from "../Fcimages/taller de las nines/carousel-products/Taller Carrusel 2.jpg"
import Carousel4 from "../Fcimages/taller de las nines/carousel-products/Taller Carrusel 9.JPG"
import Carousel5 from "../Fcimages/taller de las nines/carousel-products/Taller Carrusel 4.JPG"
import Carousel6 from "../Fcimages/taller de las nines/carousel-products/Taller Carrusel 5.JPG"
import Carousel7 from "../Fcimages/taller de las nines/carousel-products/Taller Carrusel 6.jpg"
import Carousel8 from "../Fcimages/taller de las nines/carousel-products/Taller Carrusel 7.JPG"
import Carousel9 from "../Fcimages/taller de las nines/carousel-products/Taller Carrusel 8.jpg"
import Carousel10 from "../Fcimages/taller de las nines/carousel-products/TALLER 4.jpg"
import Carousel11 from "../Fcimages/taller de las nines/carousel-products/Taller Carrusel 10.JPG"


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
          <div className="carousel-item">
            <img src={Carousel6} alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={Carousel7} alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={Carousel8} alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={Carousel9} alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={Carousel10} alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={Carousel11} alt="Slide 2" />
          </div>

        </Slider>
      </div>
    );
  };
  
export default TallerCarousel
