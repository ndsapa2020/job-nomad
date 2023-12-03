import React, { useState, useEffect } from "react";

const CountrySettings = () => {
    const [country, setCountry] = useState(
        localStorage.getItem("selectedCountry") || ""
    );

    const handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        setCountry(selectedCountry);
        localStorage.setItem("selectedCountry", selectedCountry);
    };

    return (
        <div className="container mt-5">
            <h2>Выберите вашу страну</h2>
            <select
                className="form-select"
                value={country}
                onChange={handleCountryChange}
            >
                <option value="">Выбрать страну</option>
                <option value="kyrgyzstan">Кыргызстан</option>
                <option value="kazakhstan">Казахстан</option>
                <option value="uzbekistan">Узбекистан</option>
                {/* Другие страны */}
            </select>
        </div>
    );
};

export default CountrySettings;
