import React from 'react';
import './Footer.css'; // Путь к вашему CSS-файлу

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2023 JobNomad by Nurlans.net corporation. Все права защищены.</p>
        <div className="footer-links">
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
          <a href="#">Политика конфиденциальности</a>
        </div>
        {/* Добавьте здесь ссылки на социальные сети, если нужно */}
      </div>
    </footer>
  );
};

export default Footer;
