import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import { Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  borderRadius:'30px',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  transition: 'transform 0.3s ease-in-out', // Smooth transition for the zoom effect

  '&:hover': {
    transform: 'scale(1.1)', // Zoom effect on hover (adjust scale as needed)
  },
}));

const darkTheme = createTheme({
    palette: {
      mode: 'dark', // Set the theme mode to dark
    },
  });

export default function RoundedCorners() {
  return (
    <ThemeProvider theme={darkTheme}>
    <Box
    sx={{
      display: 'grid',
      gap: 2,
      gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', // Each Paper will take up a minimum of 240px
      padding: 2, // Adjust padding around the container as needed
      //justifyContent: 'center', // Center items within the container
      //alignItems: 'center',
      marginLeft:'-250px',
      marginTop:'-80px',
      '& > :not(style)': {
        width: 240, // Consistent width for all Paper components
        height: 400, // Consistent height for all Paper components
      },
    }}
    
    >
      <DemoPaper elevation={0} square={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: 'background.default',
              color: 'text.primary', }}>
        <img src="kalki.jpg" alt="kalki" style={{ width: '100%', height: '500px', objectFit:'cover', borderRadius:'30px' }} />
        <Typography variant="h6" sx={{ position:'realtive', top:'20px', color:'white'}}>
        KALKI 2898 AD
        </Typography>
        <Rating name="read-only" value={5} readOnly />
      </DemoPaper>

      <DemoPaper elevation={0} square={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: 'background.default',
              color: 'text.primary', }}>
        <img src="rrr.jpg" alt="RRR" style={{ width: '100%', height: '500px', objectFit:'cover', borderRadius:'30px' }} />
        <Typography variant="h6" sx={{ position:'realtive', top:'20px', color:'white'}}>
        RRR
        </Typography>
        <Rating name="read-only" value={5} readOnly />
      </DemoPaper>

      <DemoPaper elevation={0} square={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: 'background.default',
        color: 'text.primary', }}>
  <img src="salar.jpg" alt="salar" style={{ width: '100%', height: '500px', objectFit:'cover', borderRadius:'30px' }} />
  <Typography variant="h6" sx={{ position:'realtive', top:'20px', color:'white'}}>
  SALAAR
  </Typography>
  <Rating name="read-only" value={5} readOnly />
</DemoPaper>

<DemoPaper elevation={0} square={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: 'background.default',
        color: 'text.primary', }}>
  <img src="pushpa.jpg" alt="pushpa" style={{ width: '100%', height: '500px', objectFit:'cover', borderRadius:'30px' }} />
  <Typography variant="h6" sx={{ position:'realtive', top:'20px', color:'white'}}>
  PUSHPA: THE RISE
  </Typography>
  <Rating name="read-only" value={5} readOnly />
</DemoPaper>

<DemoPaper elevation={0} square={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: 'background.default',
    color: 'text.primary', }}>
<img src="bahubali.jpg" alt="bahubali" style={{ width: '100%', height: '500px', objectFit:'cover', borderRadius:'30px' }} />
<Typography variant="h6" sx={{ position:'realtive', top:'20px', color:'white'}}>
BAHUBALI
</Typography>
<Rating name="read-only" value={5} readOnly />
</DemoPaper>

<DemoPaper elevation={0} square={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: 'background.default',
    color: 'text.primary', }}>
<img src="jailer.jpg" alt="jailer" style={{ width: '100%', height: '500px', objectFit:'cover', borderRadius:'30px' }} />
<Typography variant="h6" sx={{ position:'realtive', top:'20px', color:'white'}}>
JAILER
</Typography>
<Rating name="read-only" value={5} readOnly />
</DemoPaper>

<DemoPaper elevation={0} square={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: 'background.default',
    color: 'text.primary', }}>
<img src="animal1.jpg" alt="animal" style={{ width: '100%', height: '500px', objectFit:'cover', borderRadius:'30px' }} />
<Typography variant="h6" sx={{ position:'realtive', top:'20px', color:'white'}}>
ANIMAL
</Typography>
<Rating name="read-only" value={5} readOnly />
</DemoPaper>

<DemoPaper elevation={0} square={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: 'background.default',
    color: 'text.primary', }}>
<img src="mahanati.jpg" alt="mahanati" style={{ width: '100%', height: '500px', objectFit:'cover', borderRadius:'30px' }} />
<Typography variant="h6" sx={{ position:'realtive', top:'20px', color:'white'}}>
MAHANATI
</Typography>
<Rating name="read-only" value={5} readOnly />
</DemoPaper>

<DemoPaper elevation={0} square={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: 'background.default',
    color: 'text.primary', }}>
<img src="bro.jpg" alt="bro" style={{ width: '100%', height: '500px', objectFit:'cover', borderRadius:'30px' }} />
<Typography variant="h6" sx={{ position:'realtive', top:'20px', color:'white'}}>
BRO
</Typography>
<Rating name="read-only" value={5} readOnly />
</DemoPaper>

<DemoPaper elevation={0} square={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: 'background.default',
    color: 'text.primary', }}>
<img src="bagamathi.jpg" alt="bagamathi" style={{ width: '100%', height: '500px', objectFit:'cover', borderRadius:'30px' }} />
<Typography variant="h6" sx={{ position:'realtive', top:'20px', color:'white'}}>
BAGAMATHI
</Typography>
<Rating name="read-only" value={5} readOnly />
</DemoPaper>

<DemoPaper elevation={0} square={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: 'background.default',
    color: 'text.primary', }}>
<img src="kanguva.jpg" alt="kanguva" style={{ width: '100%', height: '500px', objectFit:'cover', borderRadius:'30px' }} />
<Typography variant="h6" sx={{ position:'realtive', top:'20px', color:'white'}}>
KANGUVA
</Typography>
<Rating name="read-only" value={5} readOnly />
</DemoPaper>

<DemoPaper elevation={0} square={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: 'background.default',
    color: 'text.primary', }}>
<img src="hanuman.jpg" alt="hanuman" style={{ width: '100%', height: '500px', objectFit:'cover', borderRadius:'30px' }} />
<Typography variant="h6" sx={{ position:'realtive', top:'20px', color:'white'}}>
HANUMAN
</Typography>
<Rating name="read-only" value={5} readOnly />
</DemoPaper>

<DemoPaper elevation={0} square={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: 'background.default',
    color: 'text.primary', }}>
<img src="pokiri.jpg" alt="pokiri" style={{ width: '100%', height: '500px', objectFit:'cover', borderRadius:'30px' }} />
<Typography variant="h6" sx={{ position:'realtive', top:'20px', color:'white'}}>
POKIRI
</Typography>
<Rating name="read-only" value={5} readOnly />
</DemoPaper>

<DemoPaper elevation={0} square={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: 'background.default',
    color: 'text.primary', }}>
<img src="agnyathavasi.jpg" alt="agnyathavasi" style={{ width: '100%', height: '500px', objectFit:'cover', borderRadius:'30px' }} />
<Typography variant="h6" sx={{ position:'realtive', top:'20px', color:'white'}}>
AGNYATHAVASI
</Typography>
<Rating name="read-only" value={5} readOnly />
</DemoPaper>

<DemoPaper elevation={0} square={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: 'background.default',
    color: 'text.primary', }}>
<img src="raayan.jpg" alt="raayan" style={{ width: '100%', height: '500px', objectFit:'cover', borderRadius:'30px' }} />
<Typography variant="h6" sx={{ position:'realtive', top:'20px', color:'white'}}>
RAAYAN
</Typography>
<Rating name="read-only" value={5} readOnly />
</DemoPaper>

<DemoPaper elevation={0} square={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: 'background.default',
  color: 'text.primary', }}>
<img src="red.jpg" alt="red" style={{ width: '100%', height: '500px', objectFit:'cover', borderRadius:'30px' }} />
<Typography variant="h6" sx={{ position:'realtive', top:'20px', color:'white'}}>
RED
</Typography>
<Rating name="read-only" value={5} readOnly />
</DemoPaper>

<DemoPaper elevation={0} square={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: 'background.default',
  color: 'text.primary', }}>
<img src="jathiratnalu.jpg" alt="jathiratnalu" style={{ width: '100%', height: '500px', objectFit:'cover', borderRadius:'30px' }} />
<Typography variant="h6" sx={{ position:'realtive', top:'20px', color:'white'}}>
JATHIRATNALU
</Typography>
<Rating name="read-only" value={5} readOnly />
</DemoPaper>

<DemoPaper elevation={0} square={false} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, backgroundColor: 'background.default',
  color: 'text.primary', }}>
<img src="dasara.jpg" alt="dasara" style={{ width: '100%', height: '500px', objectFit:'cover', borderRadius:'30px' }} />
<Typography variant="h6" sx={{ position:'realtive', top:'20px', color:'white'}}>
DASARA
</Typography>
<Rating name="read-only" value={5} readOnly />
</DemoPaper>

    </Box>
    </ThemeProvider>
  );
}
