import React from 'react'
// import {Link} from 'react-router-dom'
import logo from '../img/almau_logo.png'
import login from '../img/login.png'
import './header.css'

const Header = () => {
    return (
    <div className='container'>
        <img className='logo' src={logo} alt="logo"/>
        <div className='links'>
            <a href='#' className='link'>Home</a>
            <a href='#' className='link'>Things we do</a>
            <a href='#' className='link'>Our Initatives</a>
            <div className='btns'>
                <button className='btn'>Login<img src={login} alt="login" /></button>
                <button className='btn'>Register<img src={login} alt="login" /></button>
            </div>
        </div>
    </div>
  )
}

export default Header