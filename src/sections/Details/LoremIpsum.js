import React from 'react';
import { Box, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function LoremIpsum() {
  return (
    <Box sx={{mt: 1}}>
      <Typography variant="h6" sx={{mb: 1}}>Lorem ipsum</Typography>
      <Typography sx={{
        color: '#586474',
        fontSize: '15.5px',
      }}>
        <FiberManualRecordIcon sx={{ fontSize: '7px', mr: 1}}/>
        Magna eget amet nullam 
      </Typography>
      <Typography sx={{
        color: '#586474',
        fontSize: '15.5px',
      }}>
        <FiberManualRecordIcon sx={{ fontSize: '7px', mr: 1}}/>
        Adipiscing morbi in a
      </Typography>
      <Typography sx={{
        color: '#586474',
        fontSize: '15.5px',
      }}>
        <FiberManualRecordIcon sx={{ fontSize: '7px', mr: 1}}/>
        Dignissim bibendum  
      </Typography>

    </Box>
  )
}