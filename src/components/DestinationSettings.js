import React, { useState, useEffect } from 'react';

const DestinationSettings = () => {
    const [destination, setDestination] = useState(
        localStorage.getItem("selectedDestination") || ""
    );

    const handleDestinationChange = (e) => {
        const selectedDestination = e.target.value;
        setDestination(selectedDestination);
        localStorage.setItem("selectedDestination", selectedDestination);
    };

    return (
        <div className="container mt-5">
            <h2>Выберите страну назначения</h2>
            <select className="form-select" value={destination} onChange={handleDestinationChange}>
                <option value="">Выбрать страну</option>
                <option value="germany">Германия</option>
                <option value="usa">США</option>
                <option value="south_korea">Южная Корея</option>
                {/* Другие страны */}
            </select>
        </div>
    );
};

export default DestinationSettings;
