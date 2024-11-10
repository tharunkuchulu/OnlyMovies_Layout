import React from 'react';
import { Box} from '@mui/material';
import ActionAreaCard from './card';
import RoundedCorners from './posters';



function Body() {
  return (
    <Box
      sx={{
        position:'relative',
        flex: 1,
        marginLeft: '250px', // Sidebar width
        marginTop: '64px', // AppBar height (adjust as needed)
        padding: 0, // Optional: add padding inside the body for spacing
      }}
    >
  <Box>
      <ActionAreaCard/>
  </Box>
      <RoundedCorners/>
    </Box>
  );
}

export default Body;
