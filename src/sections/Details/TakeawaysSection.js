import React, { useState } from 'react';
import { Box, Button, Card, Container, TextField, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { _mockTakeaways } from 'src/_mock/mockTakeaways';
import NorthIcon from '@mui/icons-material/North';
import Buttons from './Buttons';
import Sentiments from './Sentiments';
import Takeaway from './Takeaway';

export default function TakeawaysSection() {
  const [sentiment, setSentiment] = useState(true);
  const [takeaways] = useState(_mockTakeaways)

  return (
    <Container
    maxWidth='35%'
    sx={{
      width: '35%',
      '& .MuiPaper-root.MuiPaper-elevation': {
        border: '1px solid #D6D8E1',
        borderRadius: 1.5
      },
      justifyContent: 'center',
    }}
  >
    <Buttons/>
    <Card
      sx={{
        m: '0 -1em',
        maxHeight: '100vh',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
          display: 'none',
        }
      }}
    >
      <Typography
        sx={{
          width: '100%',
          p: '1em 2em',
          borderBottom: '1px solid #D6D8E1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          position: 'sticky',
          top: 0,
          zIndex: 1,
          backgroundColor: 'white',
        }}
      >
        Takeaways ({takeaways.length})
      </Typography>
      <Button 
        sx={{
          width: '90%',
          fontWeight: '600',
          m: 2.5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent',
          }
        }}
        onClick={() => setSentiment(!sentiment)}
      >
        Sentiment
        <KeyboardArrowDownIcon/>
      </Button>
        {sentiment && (
          <Sentiments/>
        )}
        <Button
          sx={{
            width: '90%',
            fontWeight: '600',
            m: '0 1.5em',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'transparent',
            borderTop: '1px solid #D6D8E1',
            borderBottom: '1px solid #D6D8E1',
            borderRadius: '0',
            p: '1em 0',
            '&:hover': {
              backgroundColor: 'transparent',
            }
          }}
        >
          Filter
        <KeyboardArrowDownIcon/>
        </Button>
      <Typography
        sx={{
          m: '1em 1.5em',
          fontWeight: '500',
        }}
      >
        Takeaways
      </Typography>
      {takeaways.length > 0 && takeaways.map((takeaway) => (
      <Takeaway takeaway={takeaway} key={takeaway.id * 2}/>
    ))}
    <Box sx={{
       position: 'sticky',
       bottom: 0,
       zIndex: 1,
       width: '100%',
       height: '4em',
       backgroundColor: '#fff',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       gap: 1,
       borderTop: '1px solid #D6D8E1',
    }}>
      <TextField placeholder='Create takeaway' sx={{
        width: '70%',
        height: '3em',
        '& .MuiOutlinedInput-notchedOutline': {
          height: '3em',
        },
        '& .MuiOutlinedInput-root': {
          height: '3em',
        }
      }}/>
    <Button
      sx={{
        height: '2.9em',
        mt: -0.3,
        color: '#fff',
        backgroundColor: '#2292F9'
      }}
  >
    <NorthIcon/>
  </Button>
    </Box>
    </Card>
  </Container>
  )
}
