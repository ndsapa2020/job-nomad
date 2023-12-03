import React from 'react';
import './ContentSection.css'; // Путь к вашему CSS-файлу

const ContentSection = ({ title, content, image }) => {
  return (
    <div className="content-section">
      {title && <h2>{title}</h2>}
      {content && <p>{content}</p>}
      {image && <img src={image} alt={title} />}
    </div>
  );
};

export default ContentSection;
