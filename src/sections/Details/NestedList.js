import React, { useState } from 'react';

import PropTypes from 'prop-types';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';


export default function NestedList({handleOpenEditSide}) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ bgcolor: 'transparent', position: 'relative' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <MoreHorizIcon onClick={handleClick}/>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List sx={{position: 'absolute', left: '-2.5em', top: '1.5em', bgcolor: '#fff', borderRadius: '4px'}} component="div" disablePadding>
          <ListItemButton sx={{ pl: 2 }} onClick={handleOpenEditSide}>
              Edit
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}

NestedList.propTypes = {
  handleOpenEditSide: PropTypes.func
}