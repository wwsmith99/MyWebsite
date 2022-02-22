import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import useImageSlider from './useImageSlider';
import styles from './ImageSlider.module.css'

interface Props {
    images: string[]
}

const ImageSlider: React.FC<Props> = ({images}) => {

  const{
    currentSlide,
    nextImage,
    previousImage
  } = useImageSlider()

  const {
    Image,
    Slider,
    Slide,
    SlideActive,
    LeftArrow,
    RightArrow
  } = styles


  return (
    <div className={Slider}>
      <div className={LeftArrow} onClick={() =>previousImage(images.length)}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </div>
      <div className={RightArrow} onClick={() =>nextImage(images.length)}>
      <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </div>
      
      {images.map((slide, index) =>{
        return(
          <div
            className={index === currentSlide ? SlideActive : Slide}
            key={index}
          >
            {index === currentSlide && (
              <img src={slide} className = {Image}/>
            )}
          
          
          
          </div>
          
        )
      })}
    </div>
  )
}

export default ImageSlider
