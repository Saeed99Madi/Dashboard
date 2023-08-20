import React, { useState } from 'react'
import { Avatar, Box, Button, Card, TextField, Typography } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import ChatIcon from '@mui/icons-material/Chat';
import TakeawaysTag from './TakeawaysTag';
import TakeawaysLabel from './TakeawaysLabel';

export default function Takeaways() {
  const [description] = useState('Customer Feedback FGD Meeting')

  return (
  <Card 
  sx={{
    m: '1.5em',
    p: '1em',
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    position: 'relative',
  }}
  >
  <Box sx={{ml: -.7}}>
    <TakeawaysTag label='Deadline' color='#832A5A' bgColor='#F2DEEA'/>
    <TakeawaysTag label='Bug' color='#82542A' bgColor='#EDE4D3'/>
    <TakeawaysTag label='Website' color='#832A5A' bgColor='#E5D3ED'/>
  </Box>
  <Typography>This task should be done before in the end of October 2023</Typography>
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    gap: 1
  }}>
      <Avatar src='/public/assets/avatars/2.jpg' alt='name' sx={{ width: 32, height: 32 }}/>
      <Typography>Ariana Jane</Typography>
      <Box
        // onClick={onViewRow}
        sx={{
          cursor: 'pointer',
          '&:hover': {
            textDecoration: 'underline',
          },
          display: 'flex',
          alignItems: 'center',
          gap: .5,
          justifyContent: 'flex-start',
          opacity: .6,
        }}
      >
      <img src='/public/assets/mic.png' alt='img' />
      {description}
      <Typography sx={{mb: 1.3, fontSize: '20px'}}>.</Typography>
      <Typography>3:23</Typography> 
    </Box>
  </Box>
  <Box>
    <Button
    sx={{
      color: '#fff',
      backgroundColor: '#1A2638',
      fontSize: '13px',
      borderRadius: '50px',
      gap: .8,
      padding: '.3em 1em',
      '&:hover': {
        backgroundColor: '#1a2638e3'
      }
    }}
    >
      <KeyboardDoubleArrowUpIcon sx={{fontSize: '16px'}}/>
      9 upvote
    </Button>

    <Button
    sx={{
      color: '#1A2638',
      backgroundColor: 'transparent',
      fontSize: '13px',
      borderRadius: '50px',
      padding: '.2em 1em',
      ml: 1,
      gap: .8,
      border: '1px solid #1A2638',
      '&:hover': {
        backgroundColor: '#1a263808'
      }
    }}
    >
      <ChatIcon sx={{fontSize: '16px'}}/>
      comments
    </Button>
  </Box>
  <Typography sx={{opacity: .6, fontSize: '13px'}}>View 2 previous comments</Typography>
    <Box 
    sx={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      // justifyContent: 'flex-start',
      gap: 1
      
    }}
    >
      <Avatar src='/public/assets/avatars/2.jpg' alt='name' sx={{ width: 40, height: 40 }}/>
      <TextField placeholder='Add a comment' 
        sx={{
          borderRadius: '8px',
          height: '2.5em',
          p: 0,
          width: '100%',
        '& .MuiOutlinedInput-root': {
          backgroundColor: '#F6F7F8',
          borderRadius: '8px',
          p: 0,
          height: '2.5em',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none !important'
        }
        }}
    />
    </Box>
    <MoreHorizIcon
        sx={{
          position: 'absolute',
          right: '.5em',
          top: '.2em',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
    />
    <TakeawaysLabel label='Open'/>
  </Card>
  )
}
