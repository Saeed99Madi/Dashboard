import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function Transcript({text}) {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: 1,
      mt: 2
    }}>
      <Avatar src='/public/assets/images/avatars/1.jpg' sx={{width: '1.5em', height: '1.5em'}}/>
      <Typography sx={{
        color: '#586474',
        fontSize: '14px',
        width: 'fit-content',
        borderRadius: '4px',
        fontWeight: 'bold'
      }}>
        Speaker 1 <span style={{marginLeft: '1.5em', color: '#000'}}>:</span>
      </Typography>
      <Typography sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '75%',
      }}>
        {text}
        <span>0:00</span>
      </Typography>
    </Box>
  )
}

Transcript.propTypes = {
  text: PropTypes.string
}
