import React, { useState, useEffect } from 'react';

const LanguageSettings = () => {
    const [language, setLanguage] = useState(
        localStorage.getItem("selectedLanguage") || ""
    );


    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        setLanguage(selectedLanguage);
        localStorage.setItem("selectedLanguage", selectedLanguage);
    };

    return (
        <div className="container mt-5">
            <h2>Выберите язык</h2>
            <select className="form-select" value={language} onChange={handleLanguageChange}>
                <option value="">Выбрать язык</option>
                <option value="russian">Русский</option>
                <option value="english">Английский</option>
                <option value="kyrgyz">Кыргызский</option>
                {/* Другие языки */}
            </select>
        </div>
    );
};

export default LanguageSettings;
