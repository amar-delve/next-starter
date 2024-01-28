// components/ThemeToggle.js
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage on component mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    document.documentElement.classList.toggle('dark', savedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;

    // Save dark mode preference to localStorage
    localStorage.setItem('darkMode', String(newDarkMode));

    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer focus:outline-none" 
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <div className="w-9 h-5 bg-gray-200 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{darkMode ? "Light" : "Dark"}</span>
    </label>
  );
};

export default ThemeToggle;
