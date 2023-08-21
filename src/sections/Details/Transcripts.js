import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import Transcript from './Transcript'

export default function Transcripts() {
  return (
    <Box sx={{mt: 2}}>
      <Typography variant="h6" sx={{mb: 1}}>Transcript</Typography>
      <Transcript text='good morning everyone! we will start the meeting'/>
      <Transcript text='Pulvinar nunc quisque justo elementum et habitant congue at. Vivamus pellentesque nisi fringilla nascetur duis scelerisque.'/>
      <Transcript text='good morning everyone! we will start the meeting'/>
      <Transcript text='good morning everyone! we will start the meeting'/>
      <Transcript text='good morning everyone! we will start the meeting'/>
      <Transcript text='good morning everyone! we will start the meeting'/>

    </Box>
  )
}
