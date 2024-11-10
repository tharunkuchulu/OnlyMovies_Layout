import React from 'react';
import { Box, Link } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ py: 1, backgroundColor: 'black', color: 'white', alignItems:'center', alignContent:'center', justifyContent:'center' }}>
    <Link href="#" underline="hover" color="inherit" fontSize={'12px'} sx={{position:'relative', left:'570px'}}>
    {'Terms and Privacy Notice'}
    </Link>
    <Link href="#" underline="hover" color="inherit" fontSize={'12px'} sx={{position:'relative', left:'600px'}}>
    {'Send us feedback'}
    </Link>
    <Link href="#" underline="hover" color="inherit" fontSize={'12px'} sx={{position:'relative', left:'630px'}}>
    {'Help'}
    </Link>
   </Box>
  );
}

export default Footer;