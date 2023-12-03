import React from 'react';
import './NavigationMenu.css'; // Убедитесь, что создали соответствующий CSS-файл

const NavigationMenu = () => {
  return (
    <nav className="navigation-menu">
      <ul className="menu">
        <li className="menu-item"><a href="#">О нас</a></li>
        <li className="menu-item"><a href="#">Работа за рубежом</a></li>
        <li className="menu-item"><a href="#">Что нужно знать</a></li>
        <li className="menu-item"><a href="#">Объявления</a></li>
        <li className="menu-item"><a href="#">Актуальные вопросы</a></li>
        <li className="menu-item"><a href="#">Контакты</a></li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
