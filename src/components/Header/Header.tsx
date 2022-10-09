import './Header.css';
import React, { FC } from 'react';
import logo from '../../Assets/logo.svg';

const Header: FC = () => {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='logo'/>
      <p className='header__title'>Hello everyone</p>
    </header>
  )
}

export default Header