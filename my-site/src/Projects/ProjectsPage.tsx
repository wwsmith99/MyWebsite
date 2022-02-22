import styles from './ProjectsPage.module.css'
import Shiny1 from '../Images/shinyHunter.jpg'
import Shiny2 from '../Images/shinyFound.jpg'
import Shiny3 from '../Images/shinyFound2.jpg'
import emu from '../Images/Emulator.png'
import ImageSlider from '../Components/ImageSlider/ImageSlider'


const ProjectsPage = () => {
    const {
        Projects,
        img
        
    } = styles

    const images = [Shiny1, Shiny2, Shiny3]

    return (
        <div className={Projects}>
            <h2>Projects</h2>
            <p>These are some cool projects that are worth sharing! </p>
            <h3><a href='https://github.com/wwsmith99/Shiny'>Shiny Pokemon hunter</a></h3>
            <p>My first coding project. Uses OpenCV to detect super 
                rare alternate colorations of static legendary pokemon 
                encounters. This project was born out of a childhood love 
                for pokemon and boredom during <a href='https://www.theguardian.com/world/2020/jan/19/snowmageddon-cleanup-begins-after-record-newfoundland-storm'> snowmageddon</a>.</p>
                <ImageSlider
                    images={images}
                />
            <br></br>
            <h3>Emu Evolution, the Emulator</h3>
            <p>Emu Evolution is a fun school project from a software design 
                course. Emu Evolution is a libGDX game written in java and 
                its main purpose was to show off our object-oriented programming
                 skills. See more <a href='https://www.youtube.com/watch?v=xL5rSIDTTZU'>here</a>.  </p>
            <img className={img} src={emu}/>
            <h3><a href='https://amello.ca/'>Amello.ca</a></h3>
            <p>Meet, collaborate, and form connections with others through interest-based activities with Amello! Stay tuned for our launch!</p>


        </div>
    ) 
}



export default ProjectsPage