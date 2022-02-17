import styles from './AboutMePage.module.css'
import ImageSlider from '../Components/ImageSlider/ImageSlider'
import headshot from '../Images/Headshot.jpg'
import doggies from '../Images/Puppies.jpg'

const {
    AboutMe
} = styles

const images = [headshot, doggies]

const AboutMePage = () => {
    return (
        <div className={AboutMe}>
            <p>This is my first attempt at making a website! It's looking a little rough at the moment.</p>
            <ImageSlider
                images = {images}
            />
            {/* <img src={doggies}/> */}
        </div>
    )
}



export default AboutMePage