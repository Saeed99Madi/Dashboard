/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef, useState } from 'react';
import Card from '@mui/material/Card';
import { Box, Button } from '@mui/material';
import {RiForward5Fill, RiReplay5Fill} from 'react-icons/ri';
import {BsPlayCircleFill} from 'react-icons/bs'
import {FaRegPauseCircle} from 'react-icons/fa'

export default function CardAudio() {
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  const audioPlayer = useRef()
  const progressBar = useRef()
  const animationRef = useRef()


  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${returnedMinutes}:${returnedSeconds}`
  }

  const wilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    setCurrentTime(progressBar.current.value);
    animationRef.current = requestAnimationFrame(wilePlaying);
  }

  const backFive = () => {
    audioPlayer.current.currentTime -= 5;
    setCurrentTime(audioPlayer.current.currentTime);
    progressBar.current.value = audioPlayer.current.currentTime
  }

  const forwardFive = () => {
    audioPlayer.current.currentTime += 5;
    setCurrentTime(audioPlayer.current.currentTime)
    progressBar.current.value = audioPlayer.current.currentTime

  }

  const togglePlayer = () => {
    const isPlaying = playing;
    setPlaying(!isPlaying)
    if (isPlaying) {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    } else {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(wilePlaying);
    }
  }

  const changeRange = (e) => {
    audioPlayer.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  }

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds)
    progressBar.current.max = seconds;

  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])


  return (
  <Card sx={{p: 2, backgroundColor: '#F6F7F8'}}>
    <input style={{
      width: '100%',
      border: 'none', 
      outline: 'none',
    }} type='range' defaultValue={0} ref={progressBar} onChange={changeRange} />
    <Box 
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        justifyContent: 'space-between',
        width: '100%',
        color: '#7E8695'
      }}
    >
    <Box>{calculateTime(currentTime)}</Box>
    <Box>
      {duration && 
      !isNaN(duration) ? calculateTime(duration) :
       calculateTime(0)}
    </Box>
    </Box>
    <audio ref={audioPlayer} src='/public/assets/yt1s.com.mp3' preload='metadata'>
      Your browser does not support the audio element.
    </audio>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        justifyContent: 'center',
        mt: 1,
      }}
    >
    <Button sx={{fontSize: '24px', fontWeight: 'bold', borderRadius: '50px'}} onClick={backFive}><RiReplay5Fill/></Button>
    <Button
    sx={{
      height: '4.5em',
      borderRadius: '50%',
      width: '4em',
    }}
      onClick={togglePlayer}
    >
      {playing ? <FaRegPauseCircle style={{width: '100%', height: '100%'}} /> :
       <BsPlayCircleFill style={{width: '100%', height: '100%'}} />}
    </Button>
    <Button sx={{fontSize: '24px', fontWeight: 'bold', borderRadius: '50px'}} onClick={forwardFive}><RiForward5Fill/></Button>
    </Box>

  </Card>
  );
}
