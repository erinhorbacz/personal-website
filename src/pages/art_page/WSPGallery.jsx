import { useState } from 'react'
// import { useRef } from 'react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft, 
  faCircleChevronRight, 
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons'

import './wsp-gallery.css'
import classes from '../welcome_page/WelcomePage.module.css';
import './artPage.css';
import ArtBackground from "./ArtBackground";

const WSPGallery = ({galleryImages}) => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0,
  });

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( galleryImages.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }

  useEffect(() => {
    if (inView) {
      // You can add animation class or perform any desired animation logic here
      console.log('Image is in view!');
    }
  }, [inView]);

  const [imageWidth, setImageWidth] = useState(0);

  const getWidth = (event) => {
    const naturalWidth = event.target.naturalWidth;
    console.log("NATRAL:", naturalWidth);
    setImageWidth(naturalWidth);
  }

  // const [loaded, setLoadedImages] = useState(false);


  return (
    <div>
        {/* <div className="artBackground" style={{ display: "flex", justifyContent: "center", paddingBottom: "3rem" }}>
          <ArtBackground/>
        </div> */}
      {openModal && 
        <div className='sliderWrap'>
          <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal}  />
          <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
          <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
          <div className='fullScreenImage'>
            <img src={galleryImages[slideNumber].img} alt='' onLoad={getWidth}/>
            {/* add captions here */}
            {/* '450px' */}
            {/* `${imageWidth - 100}px` */}
            <div className={classes.text} style={{width: `${galleryImages[slideNumber].width}`}}>
              <p>{galleryImages[slideNumber].caption}</p>
            </div>
          </div>
        </div>
      }

      <div className='galleryWrap'>
        {
          galleryImages && galleryImages.map((slide, index) => {
            return(
              // <div className = {inView ? "artRow-zoom":"artRow"} ref = {ref}>
              <div 
                className={`single ${inView ? 'artRow-zoom' : 'artRow'}`}
                key={index}
                onClick={ () => handleOpenModal(index) }
                ref={ref}
              >
                <img src={slide.img} alt='' />
              </div>
              //  </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default WSPGallery