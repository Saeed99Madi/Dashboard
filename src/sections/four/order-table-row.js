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
import {BiFile} from 'react-icons/bi';
import { useHomeData } from 'src/layouts/dashboard/config-navigation';

// ----------------------------------------------------------------------

export default function OrderTableRow({ row, selected , onViewRow, onDeleteRow }) {

  const homeData = useHomeData()

  const {  takeaway, participant, meetingReport, customer, createdAt, user, sentiment, id } = row;
  const [name, setName] = useState(meetingReport.name);

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
        setName(`${meetingReport.name.slice(0, 18)} ...`)
      }else if (meetingReport.name.length > 30) {
        setName(`${meetingReport.name.slice(0, 30)} ...`)
      } else {
        setName(meetingReport.name)
      }
    } else if (meetingReport.Analyzing) {
        setName(`${meetingReport.name.slice(0, 5)} ...`)
      }else if (meetingReport.name.length > 16) {
        setName(`${meetingReport.name.slice(0, 16)} ...`)
      } else {
        setName(meetingReport.name)
      }
    
  }, [meetingReport.Analyzing, meetingReport.name, themeLayout])

  const renderPrimary = (
    <TableRow hover selected={selected}>

      <TableCell 
        sx={{ fontWeight: 500 }}
        align='left'
        // height='10px'
      >
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
          {id % 2 !== 0 ? homeData[0].mic : homeData[0].file }
          {name}
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

      <TableCell
        sx={{ display: 'flex', alignItems: 'center' }}
        align='left'
        >
        <Avatar alt={user.name} src={user.avatarUrl} sx={{ mr: 1, width: 32, height: 32 }} />

        <ListItemText
          primary={user.name}
          primaryTypographyProps={{ typography: 'body2' }}
          sx={{color: '#7E8695'}}
        />
      </TableCell>

      <TableCell
        sx={{color: '#7E8695'}}
        align='left'
      > {customer?.name}
      </TableCell>
      <TableCell
        align='left'
      >
        <ListItemText
          primary={format(new Date(createdAt), 'dd MMM yyyy')}
          primaryTypographyProps={{ typography: 'body2', noWrap: true }}
          sx={{color: '#7E8695'}}
        />
      </TableCell>
      <TableCell
        align='left'
      >
        <Sentiment sentiment={+sentiment}/>
      </TableCell>
      <TableCell
        align='left'
      >
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
      <TableCell
        align='left'
      >
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            justifyContent: 'flex-start',
            width: '100%',
            color: '#7E8695'
          }}>
          <BiFile/>
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
