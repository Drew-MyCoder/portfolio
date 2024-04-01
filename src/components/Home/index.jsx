import Drew from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray  = ['A', 'n', 'd', 'r', 'e', 'w', 's', ',']
    const jobArray = ['c', 'o', 'n', 't ', 'e', 'n', 't', ' ', 'W', 'r', 'i', 't', 'e', 'r']

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                   <span className={letterClass}>Hi,</span>
                     
                    <br /> I'm 
                <img src={Drew} alt="developer" /> 
                <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22} />
                </h1>
                <h2>Content Writing / Blogging and more!</h2>
                <Link to='/contact' className='flat-button'>
                    CONTACT ME
                </Link> <br />
                <br />
                <p className='about-text'>
            I'm a young man who recently developed a great 
            interest in content creation. Ihope my new found 
            love for blogging among ohters will prove to be a 
            worthwhile challenge. Fingers crossed.
          </p>
          <br />
          <br />
          <a href="https://drive.google.com/file/d/1TPuSIvS_IpMK9Rr0ddluP5bw-eNJQrEu/view?usp=sharing" className='sample'>Sample of my works. </a>
            </div>
        </div>
    )
}

export default Home