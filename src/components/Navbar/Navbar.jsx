import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg'
import avatar from '../../assets/avatar.jpeg'

const Navbar = () => {
  return (
    <div className='app__navbar'>
        <div className="app__navbar-logo">
            <div className="app__navbar-logo-top" />
            <div className="app__navbar-logo-bottom" />
            <img src={logo} alt="logo" id="logo" />
        </div>
        <div className="app__navbar-avatar-image">
          <img src={avatar} alt="avatar" id='avatar'/>
        </div>
    </div>
  )
}

export default Navbar