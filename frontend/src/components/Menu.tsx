import React from 'react';
import './Menu.css';

const Menu = () => {
  const items = [
    { title: 'Кофе', examples: [['Эспрессо', '150 ₽'], ['Латте', '200 ₽'], ['Капучино', '180 ₽']] },
    { title: 'Десерты', examples: [['Торт', '300 ₽'], ['Пирожное', '120 ₽'], ['Печенье', '50 ₽']] },
    { title: 'Напитки', examples: [['Сок', '100 ₽'], ['Газировка', '80 ₽'], ['Чай', '60 ₽']] },
  ];

  return (
    <div className="menu">
      {items.map((item) => (
        <div className="card" key={item.title}>
          <h2>{item.title}</h2>
          <ul>{item.examples.map((example) => (<li key={example[0]}>{example[0]} - {example[1]}</li>))}</ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;