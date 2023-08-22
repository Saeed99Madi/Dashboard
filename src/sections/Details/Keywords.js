import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';

export default function Keywords({keywords}) {
  return (
    <Box sx={{
      pb: 3,
      borderBottom: '1px solid #D6D8E1',
    }}>
      <Typography variant="h6">Keyword</Typography>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        mt: 1,
        flexWrap: 'wrap',
      }}>
        {keywords.length > 0 && keywords.map((keyword) => (
        <Typography key={keyword.id} sx={{
          color: '#6EA9EE',
          fontSize: '14px',
          backgroundColor: '#E2F0FD',
          width: 'fit-content',
          padding: '0.5em 1em',
          borderRadius: '50px',
          fontWeight: 'bold'
        }}>
          {keyword.text}
        </Typography>
        ))}
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

Keywords.propTypes = {
  keywords: PropTypes.array
}