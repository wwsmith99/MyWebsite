import styles from './AboutMePage.module.css'
import ImageSlider from '../Components/ImageSlider/ImageSlider'
import headshot from '../Images/Headshot.jpg'
import doggies from '../Images/Puppies.jpg'
import karateKick from '../Images/Karate1.jpg'

const {
    AboutMe,
    SlideShow
} = styles

const images = [headshot, doggies, karateKick]

const AboutMePage = () => {
    return (
        <div className={AboutMe}>
            <h2>William Smith</h2>
            <p>Welcome to my website! I am a computer engineering student working through my final semester at Memorial University. Some of my passions include practicing and coaching martial arts, completing coding projects, and eating all you can eat sushi. I am also a proud owner of two of the cutest doodles on the planet. </p>
            <div className={SlideShow}>
                <ImageSlider
                    images={images}
                />
            </div>

            {/* <img src={doggies}/> */}
        </div>
    )
}



export default AboutMePage