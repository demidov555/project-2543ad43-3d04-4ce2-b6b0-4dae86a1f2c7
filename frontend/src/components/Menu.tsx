import React from 'react';
import './Menu.css';

const Menu = () => {
  const items = [
    { title: 'Кофе', examples: [['Эспрессо', '150 ₽'], ['Латте', '200 ₽'], ['Капучино', '180 ₽']] },
    { title: 'Десерты', examples: [['Тирамису', '250 ₽'], ['Чизкейк', '230 ₽'], ['Морковный торт', '240 ₽']] },
    { title: 'Напитки', examples: [['Морс', '100 ₽'], ['Чай', '150 ₽'], ['Лимонад', '180 ₽']] }
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