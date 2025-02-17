import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faRProject, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
   return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} 
            alt="slobodan" />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' 
            to='/'>
                <FontAwesomeIcon icon={faHome} 
                color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' 
            to='/about' className='about-link'>
                <FontAwesomeIcon icon={faUser} 
                color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' 
            to='/contact' className='contact-link'>
                <FontAwesomeIcon icon={faEnvelope} 
                color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='#'>
                    <FontAwesomeIcon icon={faLinkedin} 
                    color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='#'>
                    <FontAwesomeIcon icon={faGithub} 
                    color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='#'>
                    <FontAwesomeIcon icon={faXTwitter} 
                    color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
   )
}

export default Sidebar