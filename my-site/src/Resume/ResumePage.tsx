import styles from './ResumePage.module.css'
import resume from '../Images/Resume.jpg'


const ResumePage = () => {
    const {
        Projects,
        Resume
    } = styles

    return (
        <div>
            <h2>Resume</h2>
            <img src={resume} className = {Resume}/>
        </div>
    )
}



export default ResumePage