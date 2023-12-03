import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LangExampleComp from './LangExampleComp';

const Navbar = () => {
    const [selectedCountry, setSelectedCountry] = useState(localStorage.getItem('selectedCountry'));
    const [selectedDestination, setSelectedDestination] = useState(localStorage.getItem('selectedDestination'));
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage'));

    useEffect(() => {
        const country = localStorage.getItem('selectedCountry');
        const destination = localStorage.getItem('selectedDestination');
        const language = localStorage.getItem('selectedLanguage');

        setSelectedCountry(country);
        setSelectedDestination(destination);
        setSelectedLanguage(language);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img src="/main-logo.png" alt="JobNomad Logo" style={{ width: '100px', marginRight: '10px' }} />
                JobNomad
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* <div className="collapse navbar-collapse">
                        <LangExampleComp />
                        <LanguageSelector />
                    </div> */}

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Главная</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">О нас</Link>
                    </li>
                   

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Настройки
                        </a>

                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/settings/country">Моя страна</Link>
                            <Link className="dropdown-item" to="/settings/destination">Направление</Link>
                            <Link className="dropdown-item" to="/settings/language">Язык</Link>
                        </div>
                    </li>
                    {selectedCountry && <div className="navbar-text">{selectedCountry}</div>}
                    {selectedDestination && <div className="navbar-text">{selectedDestination}</div>}
                    {selectedLanguage && <div className="navbar-text">{selectedLanguage}</div>}
                </ul>
                <div className="ml-auto">
                    <button className="btn btn-outline-success my-2 my-sm-0 mr-2" type="submit">Вход</button>
                    <button className="btn btn-success my-2 my-sm-0" type="submit">Регистрация</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div>
            <button onClick={() => changeLanguage('ru')}>RU</button>
            <button onClick={() => changeLanguage('kg')}>KG</button>
        </div>
    );
};
