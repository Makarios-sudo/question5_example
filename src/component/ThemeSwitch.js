import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeSwitch = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
    </button>
  );
};

export default ThemeSwitch;
