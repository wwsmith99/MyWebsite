import { useState } from "react"


const useImageSlider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const nextImage = async( length:number ) =>{
    setCurrentSlide( currentSlide === (length -1) ? 0 : currentSlide + 1)
        console.log(currentSlide)
    }
    const previousImage = async( length:number ) =>{
        
        setCurrentSlide(currentSlide === 0 ? length-1: currentSlide-1)
    }

    return {
        currentSlide,
        nextImage,
        previousImage

    }

}

export default useImageSlider