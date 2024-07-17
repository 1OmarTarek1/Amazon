import React from 'react';
import { useTheme } from '../../ThemeProvider/ThemeProvider';
import './ThemeBtn.css';

const ThemeBtn = ({ btnID }) => {
    const { theme, toggleTheme } = useTheme(); // Get theme and toggleTheme function from context

    return (
        <label className="switch">
            <input
                type="checkbox"
                id={btnID}
                checked={theme === 'light'} // Reflect current theme state
                onChange={toggleTheme} // Toggle theme on change
            />
            <span className="slider round"></span>
        </label>
    );
};

export default ThemeBtn;

