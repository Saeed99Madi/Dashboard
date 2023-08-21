import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Summary() {
  return (
    <Box sx={{mt: 2}}>
      <Typography variant="h6">Summary</Typography>
      <Typography sx={{
        color: '#586474',
        fontSize: '15.5px',
        mt: 1
      }}>
        Vestibulum aliquet pharetra pellentesque habitasse nunc quis varius. Euismod dignissim porta sit fermentum tellus placerat purus tellus. Id est sagittis purus montes sed elit sit a tempus. Elit convallis arcu accumsan magna eget. Amet nullam adipiscing morbi in a. Dignissim bibendum pellentesque.
        Elit convallis arcu accumsan 
      </Typography>
    </Box>
  )
}
