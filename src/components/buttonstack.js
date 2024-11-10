import React from 'react';
import { Box, Stack, Button } from '@mui/material';

function ButtonStack() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '0px',
        position:'relative',
        left:'-800px',
        top:'0xp',
      }}
    >
      <Stack spacing={1} direction="row">
        {['HOME', 'LANGUAGES', 'GENRES', 'WATCHLIST', 'DOWNLOADS'].map((text) => (
          <Button
            key={text}
            variant="text"
            sx={{
              color: 'red', // Initial text color
              // border: '2px solid red', // Border color same as text
              backgroundColor: 'transparent', // Make the background transparent initially
              transition: 'all 0.3s ease-in-out', // Smooth transition for color and border changes
              '&:hover': {
                backgroundColor: 'red', // Add a background color when hovering
                color: 'white', // Change text color to white
                border: '2px solid red', // Keep the border color the same on hover
              },
            }}            
            
          >
            {text}
          </Button>
        ))}
      </Stack>
    </Box>
  );
}

export default ButtonStack;
