import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Card, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import GroupIcon from '@mui/icons-material/Group';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AddIcon from '@mui/icons-material/Add';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { format } from 'date-fns';
import NestedList from './NestedList';

export default function ReportInfo({details, setOpenShareDialog, handleOpenEditSide}) {
  const [showParticipants, setShowParticipants] = useState(true);
  return (
    <Card sx={{p: '1.5em 1em', mt: 2, backgroundColor: '#F6F7F8'}}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}>
        <Typography
      sx={{
        color: '#1A2638',
        fontSize: '14px',
        backgroundColor: '#E3E4E8',
        width: 'fit-content',
        padding: '0.5em 1em',
        borderRadius: '4px',
        }}
      >
        Customer organization: 
        <span style={{fontWeight: 'bold', color: '#000'}}>
          Unilevel
        </span>
      </Typography>
      <Typography
        sx={{
          color: '#1A2638',
          fontSize: '14px',
          backgroundColor: '#E3E4E8',
          width: 'fit-content',
          padding: '0.5em 1em',
          borderRadius: '4px',
        }}
      >Revenue Estimate: <span style={{fontWeight: 'bold', color: '#000'}}>Medium</span>
      </Typography>
        </Box>
        <Button sx={{
          backgroundColor: '#D8EBFD',
          color: '#2292F9',
          padding: '0.5em 1em',
          borderRadius: '4px',
          '&:hover': {
            backgroundColor: '#D8EBFD',
            color: '#2292F9',
          }
        }}
          onClick={() => setOpenShareDialog(true)}
        >
          <ShareIcon/>
          Share
        </Button>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        justifyContent: 'space-between',
        mt: 1
      }}>
      <Typography sx={{fontSize: '23.5px', fontWeight: 'bold'}}>
        {details.title}
      </Typography>
        <NestedList handleOpenEditSide={handleOpenEditSide} />
      </Box>
      <Typography>
        {details.description}
      </Typography>
      <Button sx={{
        mt: 1,
        ml: -1,
        color: '#586474',
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: 'transparent',
          color: '#586474',
      }
      }}
      onClick={() => setShowParticipants(!showParticipants)}
      >
      <GroupIcon sx={{mr: .5}}/>
      {details.participants.length} participants
      <ExpandLessIcon sx={{ml: .5}}/>
      </Button>
      {showParticipants && 
        details.participants.length > 0 &&
         details.participants.map(participant => (
      <Typography key={participant.id} sx={{fontWeight: 'bold', fontSize: '14.4px', mt: 1}}>
          {participant.name} 
        <span style={{color: '#7E8695', marginLeft: '.3em'}}>
        {participant.jop} 
        </span>
      </Typography>
      ))}
      <Button sx={{
        fontSize: '13.4px',
        mt: 1,
        color: '#2292F9',
        padding: '.3em 1em',
        backgroundColor: '#D8EBFD',
        '&:hover': {
          backgroundColor: '#D8EBFD',
          color: '#2292F9',
        }
      }}>
        Add participants
        <AddIcon/>
      </Button>
      <Typography sx={{color: '#586474', fontSize: '13.4px', mt: 1}}>
        {format(details.time, 'dd/M/yyyy')}
        {/* 12 Jun 2023 */}
        <FiberManualRecordIcon sx={{fontSize: '6px', m: '.3em 1em'}}/>
        {`${format(details.time, 'h')}h ${format(details.time, 'mm')}m`}
        <FiberManualRecordIcon sx={{fontSize: '6px', m: '.3em 1em'}} />
        <span style={{color: '#6EA9EE'}}>by {details.Author}</span>
      </Typography>
    </Card>
  )
}

ReportInfo.propTypes = {
  details: PropTypes.object,
  setOpenShareDialog: PropTypes.func,
  handleOpenEditSide: PropTypes.func
}