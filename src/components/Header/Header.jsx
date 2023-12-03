import React from 'react';
import './Header.css'; // Предполагается, что стили будут в этом файле

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/main-logo.png" alt="JobNomad Logo" className="logo" />
        <span className="title">JobNomad</span>
      </div>
      <div className="header-right">
        <input type="text" placeholder="Поиск..." className="search-input" />
        <button className="login-button">Вход</button>
      </div>
    </header>
  );
};

export default Header;
