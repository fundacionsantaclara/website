import React, { useRef, useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./Noticias.css";

const Carrousel = ({ images }) => {
  const scrollContainerRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

 
  const validImages = images.filter(
    (image) => image && typeof image === "string"
  );

  const handleLeftClick = () => {
    if (scrollContainerRef.current) {
      const newIndex = (currentIndex - 1 + validImages.length) % validImages.length;
      setCurrentIndex(newIndex);
      scrollContainerRef.current.scrollTo({
        left: newIndex * window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  const handleRightClick = () => {
    if (scrollContainerRef.current) {
      const newIndex = (currentIndex + 1) % validImages.length;
      setCurrentIndex(newIndex);
      scrollContainerRef.current.scrollTo({
        left: newIndex * window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleRightClick();
    }, 3000); 

    return () => {
      clearInterval(intervalId); 
    };
  }, [currentIndex]); 

  return (
    <div className="carrousel-container">
      <IoIosArrowBack
        onClick={handleLeftClick}
        className="arrow fa-arrow-left"
      />
      <div ref={scrollContainerRef} className="carrousel-scroll-container">
        {validImages.map((image, index) => (
          <div className="carrousel-image-container" key={index}>
            <img src={image} alt={`Imagen del carrousel ${index}`} />
          </div>
        ))}
      </div>
      <IoIosArrowForward
        onClick={handleRightClick}
        className="arrow fa-arrow-right"
      />
    </div>
  );
};

export default Carrousel;
