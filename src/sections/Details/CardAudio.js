import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';



export default function CardAudio() {
  const [Play, setPlay] = useState(false);
  const theme = useTheme();

  return (
  <Card sx={{ display: 'flex', height: '8em' }}>
    <audio controls src='/public/assets/yt1s.com.mp3' >
      <source src="/public/assets/yt1s.com.mp3"/>
      <track kind="captions" label="English" srcLang="en" src="captions-en.vtt" />
      Your browser does not support the audio element.
    </audio>
  </Card>
  );
}
