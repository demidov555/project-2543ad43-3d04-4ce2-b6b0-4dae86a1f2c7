import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Уют</div>
      <nav className="menu">
        <a href="#">Главная</a>
        <a href="#">Меню</a>
        <a href="#">О нас</a>
        <a href="#">Контакты</a>
      </nav>
    </header>
  );
};

export default Header;