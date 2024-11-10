import React from 'react';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Footer from './components/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor:'black' }}>
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar />
      </Box>
      <Box>
        <Body />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;