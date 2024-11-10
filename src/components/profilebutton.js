import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton, Menu, MenuItem } from '@mui/material';

const ProfileButton = () => {
  const [anchorEl, setAnchorEl] = useState(null); // state to manage menu open/close

  // Open the menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle Menu Item clicks
  const handleMenuItemClick = (action) => {
    console.log(action); // You can handle the action (e.g., login, logout) here
    handleClose();
  };

  return (
    <div>
      {/* Profile Button with AccountCircleIcon */}
      <IconButton
  onClick={handleClick}
  color="inherit"
  sx={{
    position: 'relative',
    left: '-600px',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  }}
>
  <AccountCircleIcon color="inherit" fontSize="large" />
</IconButton>


      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl} // Anchor for the Menu (the button)
        open={Boolean(anchorEl)} // Open the Menu when anchorEl is not null
        onClose={handleClose} // Close the menu when user clicks outside
      >
        <MenuItem onClick={() => handleMenuItemClick('Profile')}>Profile</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('Settings')}>Settings</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('Logout')}>Logout</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('Login')}>Login</MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileButton;
