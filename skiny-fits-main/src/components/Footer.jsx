// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../assets/skinfits-logo.png'; 
const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt="Skinfits Logo" className="h-10 mr-3" />
            <p className="text-slate-400">&copy; 2024 Skinfits. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername/skinfits" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-200">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-200">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://instagram.com/skinfits" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-200">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;