import React from 'react'
// import {Link} from 'react-router-dom'
import logo from '../../img/images/almau_logo.png'
import login from '../../img/icons/login.png'
import '../../styles/components/header.css'

function Header() {
    return (
    <div className='header'>
        <img className='header__logo' src={logo} alt="logo"/>
        <div className='header__links'>
            <a href='sdt-proj/src/components/header/Header#' className='link header__link'>Home</a>
            <a href='sdt-proj/src/components/header/Header#' className='link header__link'>Things we do</a>
            <a href='sdt-proj/src/components/header/Header#' className='link header__link'>Our Initiatives</a>
            <div className='header__buttons'>
                <button className='button header__button'>Login<img src={login} alt="login" /></button>
                <button className='button header__button'>Register<img src={login} alt="login" /></button>
            </div>
        </div>
    </div>
  )
}

export default Header