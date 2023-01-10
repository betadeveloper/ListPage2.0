import React from 'react'

import Linkedin from './icons/linkedin.svg'
import Facebook from './icons/facebook.svg'
import GitHub from './icons/github.svg'

import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footerContainer'>
        <div className='socials'>
          <a href='https://www.linkedin.com/in/raigardas-tautkus/'>
            <img src={Linkedin} alt='LinkedIn' />
          </a>
          <a href='https://www.facebook.com/eRaigardasTautkus/'>
            <img src={Facebook} alt='Facebook' />
          </a>
          <a href='https://github.com/betadeveloper'>
            <img src={GitHub} alt='Github' />
          </a>
        </div>
        <p>&copy; Raigardas Tautkus 2023</p>
      </div>
    </footer>
  )
}
