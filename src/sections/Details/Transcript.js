import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function Transcript({transcript}) {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      mt: 2
    }}>
      <Avatar src={transcript.user.avatarUrl} alt={transcript.user.name} sx={{width: '1.5em', height: '1.5em'}}/>
      <Typography sx={{
        color: '#586474',
        fontSize: '14px',
        borderRadius: '4px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
        width: 'fit-content',
        minWidth: '20%',
      }}>
        {transcript.user.name}
      </Typography>
      <span style={{marginLeft: '1em', color: '#000'}}>:</span>
      <Typography sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '75%',
      }}>
        {transcript.text}
        <span>{transcript.time}</span>
      </Typography>
    </Box>
  )
}

Transcript.propTypes = {
  transcript: PropTypes.object
}
