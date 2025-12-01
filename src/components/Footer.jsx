import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3 md:flex-row md:justify-between md:items-center text-center">
        <p>&copy; {new Date().getFullYear()} Biswas Khatri. All rights reserved.</p>
        <p>+977 9824594933</p>
      </div>
    </footer>
  );
};

export default Footer;
