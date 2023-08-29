import React, { useState } from 'react'
import { Avatar, Box, Button, Card, Typography } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useHomeData } from 'src/layouts/dashboard/config-navigation';
import PropTypes from 'prop-types'
import TakeawaysTag from './TakeawaysTag';
import TakeawaysLabel from './TakeawaysLabel';
import TakeawayComment from './TakeawayComment';

export default function Takeaway({takeaway}) {
  const [showComments, setShowComments] = useState(false);
  const [clicked, setClicked] = useState(false);
  const homeData = useHomeData()
  console.log(homeData[0].comment.props.sx);
  const {comment, vote} = homeData[0]
  comment.props.sx.width = 15;
  comment.props.sx.height = 15;
  comment.props.sx.mb = -.5;
  vote.props.sx.ml = -1;

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
  <Typography sx={{
    fontWeight: '500'
  }}>{takeaway.description}</Typography>
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
    gap: .5
  }}>
    <Button
    sx={{
      color: '#fff',
      backgroundColor: !clicked ? '#1A2638' : '#2292F9',
      fontSize: '14px',
      borderRadius: '50px',
      gap: 0.3,
      padding: '.4em 1.2em',
      minWidth: '8.5em',
      border: '1px solid',
      borderColor: !clicked ? '#1A2638' : '#2292F9',
      '&:hover': {
        backgroundColor: !clicked ? '#1A2638' : '#2292F9',
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    onClick={() => {
      setClicked(!clicked)
    }}
    >
      {vote}
      <Typography sx={{fontSize: '14px'}} >{!clicked ? takeaway.vote.number : takeaway.vote.number + 1}</Typography>
      <Typography sx={{fontSize: '14px'}}>{!clicked ? 'upvote' : 'Voted'}</Typography>
    </Button>

    <Button
    sx={{
      color: '#586474',
      backgroundColor: 'transparent',
      fontSize: '14px',
      borderRadius: '50px',
      padding: '.3em 1em',
      ml: 1,
      gap: .8,
      fontWeight: 'bold',
      border: '1px solid #586474',
      // display: 'flex',
      // alignItems: 'center',
      // justifyContent: 'center',
      '&:hover': {
        backgroundColor: '#1a263808'
      }
    }}
    onClick={() => setShowComments(!showComments)}
    >
      {comment}
      <Typography>comments</Typography>
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
      takeaway.comments.slice(0, takeaway.comments.length - 1).map((item) => (
        <TakeawayComment key={item.id} comment={item} />
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