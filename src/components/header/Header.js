import React from 'react'
// import {Link} from 'react-router-dom'
import logo from '../../img/almau_logo.png'
import login from '../../img/login.png'
import '../../styles/components/header.css'

const Header = () => {
    return (
    <div className='header'>
        <img className='header__logo' src={logo} alt="logo"/>
        <div className='header__links'>
            <a href='sdt-proj/src/components/header/Header#' className='link header__link'>Home</a>
            <a href='sdt-proj/src/components/header/Header#' className='link header__link'>Things we do</a>
            <a href='sdt-proj/src/components/header/Header#' className='link header__link'>Our Initatives</a>
            <div className='header__buttons'>
                <button className='button header__button'>Login<img src={login} alt="login" /></button>
                <button className='button header__button'>Register<img src={login} alt="login" /></button>
            </div>
        </div>
    </div>
  )
}

export default Header