import PropTypes from 'prop-types';
import { format } from 'date-fns';
// @mui
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import ListItemText from '@mui/material/ListItemText';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import Iconify from 'src/components/iconify';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import { Sentiment } from 'src/components/sentiment';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import {  useSettingsContext } from 'src/components/settings/context/settings-context';
import { ParticipantPopup } from 'src/components/Dialogs';

// ----------------------------------------------------------------------

export default function OrderTableRow({ row, selected , onViewRow, onDeleteRow }) {
  const {  takeaway, participant, meetingReport, customer, createdAt, user, sentiment } = row;
  const [description, setDescription] = useState(meetingReport.description);

  const confirm = useBoolean();

  const popover = usePopover();

  const { themeLayout } = useSettingsContext()
  const [anchorEl, setAnchorEl] = useState(null);
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    if (themeLayout === 'mini') {
      if (meetingReport.Analyzing) {
        setDescription(`${meetingReport.description.slice(0, 22)} ...`)
      }else if (meetingReport.description.length > 35) {
        setDescription(`${meetingReport.description.slice(0, 35)} ...`)
      } else {
        setDescription(meetingReport.description)
      }
    } else if (meetingReport.Analyzing) {
        setDescription(`${meetingReport.description.slice(0, 10)} ...`)
      }else if (meetingReport.description.length > 30) {
        setDescription(`${meetingReport.description.slice(0, 23)} ...`)
      } else {
        setDescription(meetingReport.description)
      }
    
  }, [meetingReport.Analyzing, meetingReport.description, themeLayout])

  const renderPrimary = (
    <TableRow hover selected={selected}>

      <TableCell sx={{ fontFamily:'Poppins', fontWeight: 700 }}>
        <Box
          onClick={onViewRow}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'underline',
            },
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            justifyContent: 'flex-start',
            opacity: meetingReport.Analyzing ? 0.5 : 1,
          }}
        >
          <img src={meetingReport.icon} alt='img' />
          {description}
          {meetingReport.Analyzing && <Typography sx={{
            backgroundColor: '#FBDBAC',
            color: '#B37908',
            width: '100px',
            height: '30px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>Analyzing...</Typography>}
        </Box>
      </TableCell>

      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar alt={user.name} src={user.avatarUrl} sx={{ mr: 2 }} />

        <ListItemText
          primary={user.name}
          primaryTypographyProps={{ typography: 'body2' }}
          sx={{color: '#7E8695'}}
        />
      </TableCell>

      <TableCell sx={{color: '#7E8695'}} align="center"> {customer?.name} </TableCell>
      <TableCell>
        <ListItemText
          primary={format(new Date(createdAt), 'dd MMM yyyy')}
          primaryTypographyProps={{ typography: 'body2', noWrap: true }}
          sx={{color: '#7E8695'}}
        />
      </TableCell>


      <TableCell>
        <Sentiment sentiment={+sentiment}/>
      </TableCell>

      <TableCell>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            justifyContent: 'flex-start',
            width: '100%',
            color: '#7E8695'
          }}
          onMouseEnter={handlePopoverOpen}>
          <PeopleOutlineIcon/>
          {participant}
          </Box>
      </TableCell>

      <TableCell>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            justifyContent: 'flex-start',
            width: '100%',
            color: '#7E8695'
          }}>
          <img src='/public/assets/file.svg' alt='file'/>
          {takeaway}
          </Box>
      </TableCell>
    </TableRow>
  );



  return (
    <>
      {renderPrimary}
      <ParticipantPopup
        handlePopoverClose={handlePopoverClose}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />
      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        <MenuItem
          onClick={() => {
            confirm.onTrue();
            popover.onClose();
          }}
          sx={{ color: 'error.main' }}
        >
          <Iconify icon="solar:trash-bin-trash-bold" />
          Delete
        </MenuItem>

        <MenuItem
          onClick={() => {
            onViewRow();
            popover.onClose();
          }}
        >
          <Iconify icon="solar:eye-bold" />
          View
        </MenuItem>
      </CustomPopover>

    </>
  );
}

OrderTableRow.propTypes = {
  onDeleteRow: PropTypes.func,
  onViewRow: PropTypes.func,
  row: PropTypes.object,
  selected: PropTypes.bool,
};
