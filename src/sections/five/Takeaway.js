import React, { useState } from 'react'
import { Avatar, Box, Button, Card, Typography } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import ChatIcon from '@mui/icons-material/Chat';
import PropTypes from 'prop-types'
import TakeawaysTag from './TakeawaysTag';
import TakeawaysLabel from './TakeawaysLabel';
import TakeawayComment from './TakeawayComment';

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
  }}
  >
  <Box sx={{ml: -.7}}>
    {takeaway.Tags.length > 0 && takeaway.Tags.map((tag) => (
      <TakeawaysTag key={tag} tag={tag} />
    ))}
  </Box>
  <Typography>{takeaway.description}</Typography>
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    gap: 1
  }}>
      <Avatar src={takeaway.Author.avatarUrl} alt={takeaway.Author.name} sx={{ width: 32, height: 32 }}/>
      <Typography>{takeaway.Author.name}</Typography>
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
      {takeaway.Report.icon}
      {takeaway.Report.Report}
      <Typography sx={{mb: 1.3, fontSize: '20px'}}>.</Typography>
      <Typography>{takeaway.Report.time}</Typography> 
    </Box>
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
      padding: '.3em 1em',
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
      padding: '.2em 1em',
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
        <TakeawayComment key={takeaway.id} comment={comment} />
      ))

    }

    {takeaway.comments.length > 0 &&
      <TakeawayComment key={takeaway.id} comment={takeaway.comments[takeaway.comments.length - 1]} />}
    <MoreHorizIcon
        sx={{
          position: 'absolute',
          right: '.5em',
          top: '.2em',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
    />
    <TakeawaysLabel label={takeaway.label}/>
  </Card>
  )
}

Takeaway.propTypes = {
  takeaway: PropTypes.object
}