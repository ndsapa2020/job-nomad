import React from 'react';
import Header from './Header/Header.jsx';
import NavigationMenu from './NavigationMenu/NavigationMenu.jsx';
import HeroSection from './HeroSection/HeroSection.jsx'
import ContentSection from './ContentSection/ContentSection.jsx';
import Footer from './Footer/Footer.jsx';


const HomePage = () => {
  return (
    <div>
      <Header />
      <NavigationMenu />
      <HeroSection />
      <ContentSection
        title="О разделе"
        content="Здесь идет описание раздела. Вы можете добавить любой текст, который считаете необходимым."
        image="picture_1.jpg"
      />
      <Footer />
    </div>
  );
};

export default HomePage;