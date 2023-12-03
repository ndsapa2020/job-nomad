import React from 'react';
import './HeroSection.css'; // Путь к вашему CSS-файлу

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1>Добро пожаловать в JobNomad</h1>
      <p>Ваш путеводитель по работе за рубежом</p>
      <button className="cta-button">Узнать больше</button>
    </div>
  );
};

export default HeroSection;
