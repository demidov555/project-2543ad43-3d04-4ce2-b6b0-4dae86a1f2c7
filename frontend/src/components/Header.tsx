import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>Уют</div>
      <nav className='menu'>
        <a href='#home'>Главная</a>
        <a href='#menu'>Меню</a>
        <a href='#about'>О нас</a>
        <a href='#contacts'>Контакты</a>
      </nav>
    </header>
  );
};

export default Header;