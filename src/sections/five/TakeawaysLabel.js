/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types'
import { Button } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function TakeawaysLabel({label}) {
  return (
    <Button
      sx={{
        borderRadius: '50px',
        position: 'absolute',
        backgroundColor: label === 'Open' ? '#D2EED3' : label === 'On-hold' ? '#F4DDCD' : label === 'Closed' ? '#ccc' : '#E5D3ED',
        color: label === 'Open' ? '#2A8332' : label === 'On-hold' ? '#B15C0E' : label === 'Closed' ? '#000' : '#000',
        height: '2em',
        right: '1em',
        top: '2.5em',
        fontSize: '13px',
        padding: '.5em .5em',
        p: '1.2em 1em 1em 1em',
      }}
    >
      <FiberManualRecordIcon sx={{ fontSize: '13px', mr: .5}}/>
      {label}
    </Button>
  )
}

TakeawaysLabel.propTypes = {
  label: PropTypes.string
}