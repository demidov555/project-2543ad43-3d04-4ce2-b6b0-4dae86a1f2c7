import React from 'react';
import './Menu.css';

const Menu = () => {
  const items = [
    { title: 'Кофе', examples: [['Эспрессо', '150 ₽'], ['Латте', '200 ₽'], ['Капучино', '180 ₽']] },
    { title: 'Десерты', examples: [['Торт', '350 ₽'], ['Пирожное', '150 ₽'], ['Кекс', '100 ₽']] },
    { title: 'Напитки', examples: [['Чай', '100 ₽'], ['Сок', '120 ₽'], ['Вода', '50 ₽']] }
  ];

  return (
    <div className="menu">
      {items.map((item, index) => (
        <div className="card" key={index}>
          <h2>{item.title}</h2>
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