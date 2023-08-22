import React, { useState } from 'react'
import { Avatar, Box, Button, Card, Typography } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import ChatIcon from '@mui/icons-material/Chat';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types'
import TakeawaysTag from '../five/TakeawaysTag';
import TakeawayComment from '../five/TakeawayComment';
import TakeawaysLabel from '../five/TakeawaysLabel';

export default function Takeaway({takeaway}) {
  const [showComments, setShowComments] = useState(false);
  // console.log();
  return (
  <Card 
  sx={{
    m: '1.5em',
    p: '1em',
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    position: 'relative',
    border: 'none !important',
    backgroundColor: '#F6F7F8',
  }}
  >
  <Typography sx={{mt: 5, ml: 1}}>{takeaway.description}</Typography>
  <Box sx={{ml: -.7}}>
    {takeaway.Tags.length > 0 && takeaway.Tags.map((tag, i) => (
      <TakeawaysTag key={i} tag={tag} />
    ))}
      <Button sx={{
      color: '#7E8695',
      fontSize: '14px',
      backgroundColor: 'transparent',
      border: '1px solid #7E8695',
      p: '.2em .5em',
      borderRadius: '4px',
      m: 1,
      '&:hover': {
        backgroundColor: 'transparent',
      }
    }}>
      <AddIcon/>
      add label
    </Button>
  </Box>
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    gap: 1
  }}>
      <Avatar src={takeaway.Author.avatarUrl} alt={takeaway.Author.name} sx={{ width: 32, height: 32 }}/>
      <Typography>{takeaway.Author.name}</Typography>
  </Box>
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    gap: 1
  }}>
    <Button
    sx={{
      color: '#fff',
      backgroundColor: takeaway.vote.clicked ? '#1A2638' : '#2292F9',
      fontSize: '13px',
      borderRadius: '50px',
      gap: .8,
      padding: '.5em 1em',
      '&:hover': {
        backgroundColor: '#1a2638e3'
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
    }}
    >
      <KeyboardDoubleArrowUpIcon sx={{fontSize: '16px'}}/>
      <Typography sx={{fontSize: '13px'}} >{takeaway.vote.number}</Typography>
      <Typography sx={{fontSize: '13px'}}>{takeaway.vote.clicked ? 'upvote' : 'Voted'}</Typography>
    </Button>

    <Button
    sx={{
      color: '#1A2638',
      backgroundColor: 'transparent',
      fontSize: '13px',
      borderRadius: '50px',
      padding: '.3em 1em',
      ml: 1,
      gap: .8,
      border: '1px solid #1A2638',
      '&:hover': {
        backgroundColor: '#1a263808'
      }
    }}
    onClick={() => setShowComments(!showComments)}
    >
      <ChatIcon sx={{fontSize: '16px'}}/>
      comments
    </Button>
  </Box>
    {takeaway.comments.length > 1 ? 
    <Typography sx={{opacity: .6, fontSize: '13px'}}>
      View {takeaway.comments.length} previous comments
    </Typography> :
    <Typography sx={{opacity: .6, fontSize: '13px'}}>
      {takeaway.comments.length} comments
    </Typography>}

    {showComments && takeaway.comments.length > 1 &&
      takeaway.comments.slice(0, takeaway.comments.length - 1).map((comment) => (
        <TakeawayComment Details key={takeaway.id} comment={comment} />
      ))

    }

    {takeaway.comments.length > 0 &&
      <TakeawayComment Details comment={takeaway.comments[takeaway.comments.length - 1]} />}
    <MoreHorizIcon
        sx={{
          position: 'absolute',
          right: '.5em',
          top: '.2em',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
    />
    <TakeawaysLabel Details label={takeaway.label}/>
  </Card>
  )
}

Takeaway.propTypes = {
  takeaway: PropTypes.object
}