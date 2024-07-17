import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark'); // Default to dark theme

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []); // Only runs once on initial render

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme); // Apply theme to the document
        localStorage.setItem('theme', theme); // Save theme preference to localStorage
    }, [theme]); // Runs whenever theme state changes

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark')); // Toggle between light and dark themes
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(ThemeContext); // Custom hook to use theme context
