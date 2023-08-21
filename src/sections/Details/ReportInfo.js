import React from 'react';
import { Box, Button, Card, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GroupIcon from '@mui/icons-material/Group';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AddIcon from '@mui/icons-material/Add';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function ReportInfo() {
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
        }}>
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
      <Typography sx={{fontSize: '23.5px', fontWeight: 'bold'}}>Quarterly Business Review (QBR) for Unilevel - June 2023</Typography>
      <Button sx={{
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: 'transparent',
        }
      }}>
        <MoreHorizIcon/>
      </Button>
      </Box>
      <Typography>Discussion about whether our platform has been helping our client</Typography>
      <Button sx={{
        mt: 1,
        ml: -1,
        color: '#586474',
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: 'transparent',
          color: '#586474',
      }
      }}>
      <GroupIcon/>
      4 participants
      <ExpandLessIcon/>
      </Button>
      <Typography sx={{fontWeight: 'bold', fontSize: '14.4px', mt: 1}}>Robert Arthur <span style={{color: '#7E8695', marginLeft: '.3em'}}>General Manager</span></Typography>
      <Typography sx={{fontWeight: 'bold', fontSize: '14.4px', mt: 1}}>John F Kennedy<span style={{color: '#7E8695', marginLeft: '.3em'}}>Lead Sales Manager</span></Typography>
      <Typography sx={{fontWeight: 'bold', fontSize: '14.4px', mt: 1}}>Thomas Shelby<span style={{color: '#7E8695', marginLeft: '.3em'}}>Accounting Staff</span></Typography>
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
        12 Jun 2023
        <FiberManualRecordIcon sx={{fontSize: '6px', m: '.3em 1em'}}/>
        2h 16m
        <FiberManualRecordIcon sx={{fontSize: '6px', m: '.3em 1em'}} />
        <span style={{color: '#6EA9EE'}}>by Arthur Graham</span>
      </Typography>
    </Card>
  )
}
