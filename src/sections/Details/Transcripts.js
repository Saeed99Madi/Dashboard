import React from 'react'
import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types';
import Transcript from './Transcript';

export default function Transcripts({transcripts}) {
  return (
    <Box sx={{mt: 2}}>
      <Typography variant="h6" sx={{mb: 1}}>Transcript</Typography>
      {transcripts.length > 0 && transcripts.map((transcript) => (
      <Transcript transcript={transcript} key={transcript.id}/>
      ))}

    </Box>
  )
}

Transcripts.propTypes = {
  transcripts: PropTypes.array
}
