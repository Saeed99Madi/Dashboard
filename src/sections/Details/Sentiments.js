import React from 'react';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Box, Typography } from '@mui/material';
import { useSettingsContext } from 'src/components/settings';

export default function Sentiments() {
  const { themeLayout } = useSettingsContext()

  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      p: '0 1em 1em 1em',
      gap: 1
    }}>
      <Typography
        sx={{
          width: '48%',
          p: '1em 2em',
          borderBottom: '1px solid #D6D8E1',
          display: 'flex',
          alignItems: 'center',
          fontWeight: '600',
          color: '#9A3AAA',
          backgroundColor: '#EAD7F6',
          borderRadius: '50px',
          fontSize: '14px',
        }}
      >
        <SentimentNeutralIcon sx={{mr: .5, ml:themeLayout !== 'mini' ? -2 : -1}}/>
        Neutral
        <span style={{marginLeft: themeLayout !== 'mini' ? '.5em' : '1.5em'}}>15%</span>
      </Typography>
      <Typography
        sx={{
          width: '48%',
          p: '1em 2em',
          borderBottom: '1px solid #D6D8E1',
          display: 'flex',
          alignItems: 'center',
          fontWeight: '600',
          color: '#259E1B',
          backgroundColor: '#C9F4C6',
          borderRadius: '50px',
          fontSize: '14px',
        }}
      >
        <SentimentSatisfiedAltIcon sx={{mr: .5, ml:themeLayout !== 'mini' ? -2 : -1}}/>
        Positive
        <span style={{marginLeft: themeLayout !== 'mini' ? '.5em' : '1.5em'}}>75%</span>
      </Typography>
      <Typography
        sx={{
          width: '48%',
          p: '1em 2em',
          borderBottom: '1px solid #D6D8E1',
          display: 'flex',
          alignItems: 'center',
          fontWeight: '600',
          color: '#AE7914',
          backgroundColor: '#F4EAC6',
          borderRadius: '50px',
          fontSize: '14px',
        }}
      >
        <SentimentVeryDissatisfiedIcon sx={{mr: .5, ml:themeLayout !== 'mini' ? -2 : -1}}/>
        Negative
        <span style={{marginLeft: themeLayout !== 'mini' ? '.5em' : '1.5em'}}>75%</span>
      </Typography>
    </Box>
  )
}
