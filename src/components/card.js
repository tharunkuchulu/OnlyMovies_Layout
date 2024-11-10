import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, CardActionArea, Button } from '@mui/material';

const cardData = [
  {
    title: '𝙊𝙂',
    description: 'OG revolves around a ruthless gangster named Ojas Gambheera “OG” who returns to Mumbai after disappearing for 10 years on a personal crusade to finish crime bosses.',
    imageUrl: 'og.jpg',
    width: 1200,
    height: 550,
  },
  {
    title: '𝙋𝙐𝙎𝙃𝙋𝘼-2',
    description: 'In the late 1990s, labourer Pushpa Raj decides to smuggle red sandalwood with his friend Kesava. ',
    imageUrl: 'pushpa3.jpg',
    width: 1000,
    height: 550,
  },
  {
    title: '𝙍𝘼𝙅𝘼𝙎𝘼𝘼𝘽',
    description: 'The Raja Saab is a Telugu romantic action entertainer movie directed by Maruthi Dasari.',
    imageUrl: 'rsab2.jpg',
    width: 1100,
    height: 550,
  },
];

export default function ActionAreaCard() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
  };

  const { title, description, imageUrl, width, height } = cardData[currentCardIndex];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', position: 'relative',left:'-135px',top:'-70px' }}>
      {/* Previous Button */}
      <Button
        variant="contained"
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          left: '20px',
          zIndex: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
        }}
      >
        {'<'}
      </Button>

      {/* Card Component */}
      <Card
        elevation={10}
        sx={{
          width: width,
          height: height,
          overflow: 'hidden',
          transition: 'transform 0.3s ease-in-out',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': {
            transform: 'scale(1.05)', // Zoom effect on the entire card
          },
        }}
      >
        <CardActionArea sx={{ height: '100%' }}>
          <div
            className="card-media"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <CardContent
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              color: '#fff',
              background: 'rgba(0, 0, 0, 0.6)',
              padding: '16px',
            }}
          >
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="inherit">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* Next Button */}
      <Button
        variant="contained"
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: '20px',
          zIndex: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
        }}
      >
        {'>'}
      </Button>
    </Box>
  );
}
