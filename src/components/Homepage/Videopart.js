import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import misa from "../../Images/EVENTO SAGRADA FAMILIA 2023-104.jpg";
import misa2 from "../../Images/Libro2.jpg";
import misa3 from "../../Images/ucrania.jpg";
import misa4 from "../../Images/ucrania6.jpg";

import "./Videopart.css";

const Videopart = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed in milliseconds
  };

  return (
    <div className="video-page-container">
      <div className="video-section">
        {/* You can replace the video source with your own */}
        <video width="100%" height="100%" controls loop autoPlay muted>
          <source src="/fundacionconvent.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="slideshow-section">
        <Slider {...settings}>
          <div className="slide">
            <img src={misa} alt="Slide 1" />
          </div>
          <div className="slide">
            <img src={misa2} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={misa3} alt="Slide 2" />
          </div>
          <div className="slide">
            <img src={misa4} alt="Slide 2" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Videopart;
