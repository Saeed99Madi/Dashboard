import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function TakeawayComment({comment, Details}) {
  return (
    <Box
    sx={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      mt: 1
    }}
    >
      <Avatar src={comment.avatarUrl} alt='name' sx={{ width: 40, height: 40 }}/>
      <Typography
        sx={{
          borderRadius: '8px',
          // height: '2.5em',
          p: 1,
          width: '100%',
          color: 'black',
          backgroundColor: Details ? '#fff' : '#F6F7F8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
    >{comment.text}</Typography>
    </Box>
  )
};

TakeawayComment.propTypes = {
  comment: PropTypes.object,
  Details: PropTypes.bool
}
