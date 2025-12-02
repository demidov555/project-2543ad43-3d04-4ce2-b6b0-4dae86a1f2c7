import React from 'react';
import './Menu.css';

const Menu = () => {
  const items = [
    { title: 'Кофе', examples: [['Эспрессо', '150 ₽'], ['Латте', '200 ₽'], ['Капучино', '180 ₽']] },
    { title: 'Десерты', examples: [['Торт', '250 ₽'], ['Пирожное', '100 ₽'], ['Кекс', '120 ₽']] },
    { title: 'Напитки', examples: [['Чай', '100 ₽'], ['Сок', '150 ₽'], ['Минеральная вода', '80 ₽']] }
  ];

  return (
    <div className='menu'>
      {items.map((category) => (
        <div className='card' key={category.title}>
          <h3>{category.title}</h3>
          <ul>
            {category.examples.map(([name, price]) => (
              <li key={name}>{name} - {price}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;