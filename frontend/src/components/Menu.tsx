import React from 'react';
import './Menu.css';

const Menu = () => {
  const items = [
    { title: 'Кофе', examples: [['Эспрессо', '150 ₽'], ['Латте', '200 ₽'], ['Капучино', '180 ₽']] },
    { title: 'Десерты', examples: [['Торт', '300 ₽'], ['Пирожное', '150 ₽'], ['Кекс', '100 ₽']] },
    { title: 'Напитки', examples: [['Лимонад', '100 ₽'], ['Чай', '80 ₽'], ['Сок', '150 ₽']] }
  ];

  return (
    <div className='menu'>
      {items.map((item, index) => (
        <div className='card' key={index}>
          <h3>{item.title}</h3>
          <ul>
            {item.examples.map((example, idx) => (
              <li key={idx}>{example[0]} - {example[1]}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;