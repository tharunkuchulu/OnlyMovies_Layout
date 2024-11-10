import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function ThemeToggle() {
  // State to track the theme (light or dark)
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply background color based on the theme state
  const bodyStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    color: isDarkMode ? 'white' : 'black', // Optional: change text color for better contrast
    transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition
    minHeight: '0vh',
    margin: 0,
  };

  return (
    <div style={bodyStyle}>
      {/* Theme toggle button */}
      <IconButton
  onClick={toggleTheme}
  sx={{
    position: 'relative',
    left: '-480px',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  }}
>
  <DarkModeIcon color="primary" fontSize="large" />
</IconButton>

    </div>
  );
}

export default ThemeToggle;
