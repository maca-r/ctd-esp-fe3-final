import React from 'react'
import { useContextGlobal } from './utils/global.context'

const Footer = () => {

  const {dataState} = useContextGlobal()
  return (
    <footer className={dataState.theme}>
          <div className='icon'>
            <p>Powered by</p>
            <img src="./images/DH.png" alt='DH-logo' />  
          </div>
          
        
          <div className='social-icon'>
            <img src="./images/ico-facebook.png" alt="facebook" />
            <img src="./images/ico-instagram.png" alt="instagram" />
            <img src="./images/ico-whatsapp.png" alt="whatsapp" />
            <img src="./images/ico-tiktok.png"  alt="tiktok" />
          </div>
          
    </footer>
  )
}

export default Footer
