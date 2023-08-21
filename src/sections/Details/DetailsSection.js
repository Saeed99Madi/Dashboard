import React from 'react'
import { Card, Container } from '@mui/material'
import CardAudio from './CardAudio'
import ReportInfo from './ReportInfo'
import Summary from './Summary'
import LoremIpsum from './LoremIpsum'
import Keywords from './Keywords'
import Transcripts from './Transcripts'


export default function DetailsSection() {
  return (
    <Container
    maxWidth='65%'
    sx={{
      width: '65%',
      '& .MuiPaper-root.MuiPaper-elevation': {
        border: '1px solid #D6D8E1',
        borderRadius: 1.5
      },
      justifyContent: 'center',
    }}
  >
    <Card sx={{ m: '0 -1em', p: '2em 1.5em' }}>
      <CardAudio/>
      <ReportInfo/>
      <Summary/>
      <LoremIpsum/>
      <Keywords/>
      <Transcripts/>
      </Card>
  </Container>
  )
}
