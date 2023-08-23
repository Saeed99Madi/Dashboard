import React, { useState } from 'react';
import { useParams } from 'react-router';

import { Card, Container } from '@mui/material';
import { _mockDetails } from 'src/_mock/-mockDetails';

import { ShareDialog } from 'src/components/Dialogs';

import CardAudio from './CardAudio';
import ReportInfo from './ReportInfo';
import Summary from './Summary';
import LoremIpsum from './LoremIpsum';
import Keywords from './Keywords';
import Transcripts from './Transcripts';


export default function DetailsSection() {
  const [openShareDialog, setOpenShareDialog] = useState(false);
  const {id} = useParams()
  const [ details ] = useState(_mockDetails[id])
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
      <ReportInfo details={details} setOpenShareDialog={setOpenShareDialog}/>
      <Summary summary={details.summary}/>
      <LoremIpsum loremIpsum={details.LoremIpsum}/>
      <Keywords keywords={details.Keywords}/>
      <Transcripts transcripts={details.transcripts}/>
      <ShareDialog open={openShareDialog} onClose={() => setOpenShareDialog(false)}/>
      </Card>
  </Container>
  )
}
