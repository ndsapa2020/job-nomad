import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        birthYear: 1976,
        nickname: 'SomeNick102020',
        avatar: 'http://example.com/avatars/alina85.png',
        userStatus: 'PAUSED',
        reputation: 0,
        expertiseLevel: 'INTERMEDIATE',
        registrationDate: '2021-08-15',
        maritalStatus: 'SINGLE',
        gender: 'MALE',
        lastLoggedDate: '2023-11-20',
        role: 'EXPERT',
        countryOfBirth: 'KAZAKHSTAN',
        countryTo: 'USA',
        telegram: 'cc',
        phone: '+7098765432',
        engagementLevel: 48,
        reservedField: ''
        // Другие поля
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/users', user);
            console.log(response.data);
            // Обработка успешной регистрации
        } catch (error) {
            console.error(error);
            // Обработка ошибок
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                placeholder="Имя"
            />
            <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                placeholder="Фамилия"
            />

            <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="e-mail"
            />
            <input
                type="text"
                name="nickname"
                value={user.nickname}
                onChange={handleChange}
                placeholder="Выберите ник"
            />
             <input
                type="text"
                name="avatar"
                value={user.avatar}
                onChange={handleChange}
                placeholder="avatar"
            />
             <input
                type="text"
                name="userStatus"
                value={user.userStatus}
                onChange={handleChange}
                placeholder="Статус пользователя"
            />

            {/* Другие поля */}


            <button type="submit">Регистрация</button>
        </form>
    );
};

export default RegistrationForm;
