import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

import { Card, Container } from '@mui/material';
import { _mockDetails } from 'src/_mock/-mockDetails';

import { ShareDialog } from 'src/components/Dialogs';

import CardAudio from './CardAudio';
import ReportInfo from './ReportInfo';
import Summary from './Summary';
import LoremIpsum from './LoremIpsum';
import Keywords from './Keywords';
import Transcripts from './Transcripts';


export default function DetailsSection({handleOpenEditSide}) {
  const [openShareDialog, setOpenShareDialog] = useState(false);
  const {id} = useParams()
  const [ details, setDetails ] = useState(_mockDetails[id])

  useEffect(() => {
    setDetails(_mockDetails[id])
  }, [id])
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
      <ReportInfo details={details} setOpenShareDialog={setOpenShareDialog} handleOpenEditSide={handleOpenEditSide}/>
      <Summary summary={details.summary}/>
      <LoremIpsum loremIpsum={details.LoremIpsum}/>
      <Keywords keywords={details.Keywords}/>
      <Transcripts transcripts={details.transcripts}/>
      <ShareDialog open={openShareDialog} onClose={() => setOpenShareDialog(false)}/>
      </Card>
  </Container>
  )
}

DetailsSection.propTypes = {
  handleOpenEditSide: PropTypes.func
}