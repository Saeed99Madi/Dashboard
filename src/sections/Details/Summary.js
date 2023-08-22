import React from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function Summary({summary}) {
  return (
    <Box sx={{mt: 2}}>
      <Typography variant="h6">Summary</Typography>
      <Typography sx={{
        color: '#586474',
        fontSize: '15.5px',
        mt: 1
      }}>
        {summary}
      </Typography>
    </Box>
  )
}

Summary.propTypes = {
  summary: PropTypes.string
}