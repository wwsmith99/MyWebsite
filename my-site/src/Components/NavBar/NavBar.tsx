import Link from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
    
    const {
        LinksList
    } = styles
    
    
    return (

            <ul className = {LinksList}>
                <li><a href='/'>About me</a></li>
                <li><a href='/Resume'>Resume</a></li>
                <li><a href='/Projects'>Projects</a></li>
                <li><a href='/'>Contact me</a></li>
            </ul>
    )
}


export default NavBar