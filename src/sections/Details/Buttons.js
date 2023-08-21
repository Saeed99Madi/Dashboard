import { Box, Button } from '@mui/material'
import React from 'react'

export default function Buttons() {
  return (
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 2,
    width: '100%',
    mb: 1
  }}>
    <Button sx={{
      backgroundColor: '#D8EBFD',
      color: '#2292F9',
      padding: '0.5em .8em',
      width: '35%',
      borderRadius: '4px',
      border: '1px solid #D6D8E1',
      fontSize: '14px',
      ml: -1,
      '&:hover': {
        backgroundColor: '#D8EBFD',
        color: '#2292F9',
      }
    }}>AI Regenerate</Button>
    <Button
      sx={{
        backgroundColor: '#B9B9B9',
        color: '#000',
        padding: '0.5em .8em',
        borderRadius: '4px',
        fontSize: '14px',
        width: '35%',
        border: '1px solid #D6D8E1',
        '&:hover': {
          backgroundColor: '#B9B9B9',
          color: '#000',
        }
      }}
    >Save as Draft</Button>
    <Button
      sx={{
        backgroundColor: '#9747FF',
        color: '#fff',
        fontSize: '14px',
        padding: '0.5em .8em',
        borderRadius: '4px',
        width: '30%',
        border: '1px solid #D6D8E1',
        mr: -1,
        '&:hover': {
          backgroundColor: '#9747FF',
          color: '#fff',
        }
      }}
    >Publish</Button>
  </Box>
  )
}
