import React from 'react';
import { Box, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PropTypes from 'prop-types';

export default function LoremIpsum({loremIpsum}) {
  return (
    <Box sx={{mt: 1, mb: 1}}>
      <Typography variant="h6" sx={{mb: 1}}>Lorem ipsum</Typography>
      {loremIpsum.length > 0 && loremIpsum.map((item) => (        
      <Typography key={item.id} sx={{
        color: '#586474',
        fontSize: '15.5px',
      }}>
        <FiberManualRecordIcon sx={{ fontSize: '7px', mr: 1}}/>
        {item.text}
      </Typography>
      ))}
    </Box>
  )
}

LoremIpsum.propTypes = {
  loremIpsum: PropTypes.array
}