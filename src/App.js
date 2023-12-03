import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import CountriesPage from "./components/CountriesPage";
import ContactPage from "./components/ContactPage";
import CountrySettings from './components/CountrySettings';
import DestinationSettings from './components/DestinationSettings';
import LanguageSettings from './components/LanguageSettings';
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <Router>
      <div className="centered-content">
      <Navbar />
      <RegistrationForm />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/settings/country" element={<CountrySettings />} />
        <Route path="/settings/destination" element={<DestinationSettings />} />
        <Route path="/settings/language" element={<LanguageSettings />} />
        <Route path="/register" component={RegistrationForm} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
