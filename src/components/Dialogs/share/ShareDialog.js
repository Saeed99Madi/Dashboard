import React, { forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';


const Transition = forwardRef((props, ref) => <Slide direction="down" ref={ref} {...props} />);

export default function ShareDialog({open, onClose}) {


  return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Revenue</DialogTitle>
        <DialogContent>

            <Typography>Share</Typography>
      </DialogContent>
        <DialogActions sx={{borderTop: '1px solid #f0f2f4', paddingTop: '1em'}}>
          <Button
            sx={{
              width: '120px',
              height: '40px',
              borderRadius: '6px',
              padding: '10px, 15px',
              backgroundColor: '#E8E8EE',
              fontWeight: 200
            }} 
            onClick={() => {
              onClose()
            }}
          >
            CANCEL
          </Button>
          <Button
            sx={{
              width: '120px',
              height: '40px',
              borderRadius: '6px',
              padding: '10px, 15px',
              backgroundColor: '#2292F9',
              color: '#fff',
              fontWeight: 200
            }} 
            onClick={() => {
              onClose('continue')
            }}
          >
            CONTINUE
          </Button>
        </DialogActions>
      </Dialog>
  );
}

ShareDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
}