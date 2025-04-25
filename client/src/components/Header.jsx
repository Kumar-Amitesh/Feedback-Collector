import React from 'react';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow-md p-2 flex justify-between items-center transition-all duration-300">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Share Your Thoughts</h1>

      {/* Toggle Switch */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-900 dark:text-white">{darkMode ? 'Dark' : 'Light'} Mode</span>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 duration-300 focus:outline-none"
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
              darkMode ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
