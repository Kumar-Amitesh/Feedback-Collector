import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-900'} transition-all duration-500 min-h-screen flex flex-col justify-between`}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />

            <Outlet context={{ darkMode }} />

            <footer className="text-sm text-gray-500 dark:text-gray-400 text-center py-2">
                Developed by Amitesh Kumar • Submission for Feedback App Project
            </footer>
        </div>
    );
};

export default Layout;
