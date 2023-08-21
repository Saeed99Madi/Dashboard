import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function Keywords() {
  return (
    <Box sx={{
      pb: 3,
      borderBottom: '1px solid #D6D8E1',
    }}>
      <Typography variant="h6">Keyword</Typography>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
        <Typography sx={{
          color: '#6EA9EE',
          fontSize: '14px',
          backgroundColor: '#E2F0FD',
          width: 'fit-content',
          padding: '0.5em 1em',
          borderRadius: '50px',
          fontWeight: 'bold'
        }}>
          deadline
        </Typography>
        <Button sx={{
          backgroundColor: 'transparent',
          color: '#7E8695',
          padding: '0.2em .5em',
          borderRadius: '4px',
          border: '1px solid #D6D8E1',
          '&:hover': {
            backgroundColor: 'transparent',
            color: '#7E8695',
          }
        }}>
          <AddIcon/>
          add label
        </Button>
      </Box>
    </Box>
  )
}
