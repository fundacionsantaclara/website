{/*import React from 'react'
import './Slideshow.css'
import { slideshow } from './Slideshowitem'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { slideshowimage} from "../../Assets/images/slideshow"
import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"


const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='next'>
          <MdNavigateNext className='icon' />
        </button>
      </div>
    )
  }
  const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='prev'>
          <GrFormPrevious className='icon' />
        </button>
      </div>
    )
  }
function Slideshow() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      }
  return (
    <>
      <section className='category'>
        <div className='content'>
          <Slider {...settings}>
            {slideshow.map((item) => (
              <div className='boxs'>
                <div className='box' key={item.id}>
                  <img src={item.cover} alt='cover' />
                  <div className='overlay'>
                    <h4>{item.category}</h4>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Slideshow*/}