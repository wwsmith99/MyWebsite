
import React from 'react'

interface Props {
    images: string[]
}

const ImageSlider: React.FC<Props> = ({images}) => {
  return (
    <div>
      {images.map((slide, index) =>{
        return(
          <img src={slide} alt='dunno'/>
        )
      })}
    </div>
  )
}

export default ImageSlider
