import React from 'react'
import logoSpotify from "../assets/logo/spotify-logo.webp";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='header'>
      <Link to= '/'>
         <img src={logoSpotify} alt='Logo do spotify' width="50" height="50" /> 
      </Link>
      <Link className= 'header__link' to="/">
        <h1>EarSongs</h1>
      </Link>
    </div>
  )
}

export default Header
