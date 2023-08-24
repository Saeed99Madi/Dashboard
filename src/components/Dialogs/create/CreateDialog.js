import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
// @mui
import {
  Box,
  Button,
  Divider,
  Drawer,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography
} from '@mui/material';

import { _roles } from 'src/_mock/assets';

// components
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import UploadBox from './UploadBox';
import CustomOption from '../sortBy/CustomOption';
import Participant from './Participant';

const positionOptions = _roles

// ----------------------------------------------------------------------

export default function CreateDialog({
  open,
  onOpen,
  onClose,
}) {
  const [participants, setParticipants] = useState([]);
  const [OptionsValue, setOptionsValue] = useState('');
  const [radioValue, setRadioValue] = useState('');
  const [Name, setName] = useState('');

  const handleAddParticipant = () => {
    setParticipants([...participants, {name: Name, position: OptionsValue, id: Date.now()}]);
    setName('');
    setOptionsValue('');
  }
  
 

  const renderHead = (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ py: 2, pr: 1, pl: 2.5 }}
    >
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
      Upload your meeting report
      </Typography>

      <IconButton onClick={onClose}>
        <Iconify icon="mingcute:close-line" />
      </IconButton>
    </Stack>
  );

  const uploadFiles = (
    <Stack direction="row" gap={1}>
      <UploadBox label="AUDIO" />
      <UploadBox label="DOCUMENT" />
    </Stack>
  );

  const inputs = (
    <>
      <Stack sx={{mb: 1}}>
      <Typography variant="subtitle2" sx={{ m: '1em 0 0.2em 0.2em' }}>
        Meeting title
      </Typography>
      <TextField
      // value={'name'}
        onChange={console.log}
        placeholder="Insert meeting title"
        InputProps={{
          sx: {
            height: '3em',
            borderRadius: '5px',   
          },
        }}
        sx={{
          width: { xs: 1, md: '100%' },
          height: '3em',
        }}
      /> 
      <Typography variant="subtitle2" sx={{ m: '1em 0 0.2em 0.2em' }}>
        Meeting type
      </Typography>
      <TextField
      // value={'name'}
      onChange={console.log}
      placeholder="Insert meeting type"
      InputProps={{
        sx: {
          height: '3em',          
          borderRadius: '5px',   
        },
      }}
      sx={{
        width: { xs: 1, md: '100%' },
        height: '3em',
      }}
    /> 
      <Typography variant="subtitle2" sx={{ m: '1em 0 0.2em 0.2em' }}>
        Description
      </Typography>
      <TextField
          placeholder='Discuss about sales report performance on June'
          multiline
          variant="filled"
          // value="Discuss about sales report performance on June"
          onChange={(event) => {console.log(event.target.value)}}
          rows={5}
          InputProps={{
            sx: {
              height: '4em',
              paddingTop: '6em',
              backgroundColor: '#fff',
              borderRadius: '5px',
              border: '1px solid #D6D8E1',
            },
          }}
          sx={{
            width: { xs: 1, md: '100%' },
            height: '4em',
            '& *': {
              backgroundColor: '#fff',
            },
            '& .MuiFilledInput-root.MuiFilledInput-root:hover': {
              backgroundColor: '#fff',
              border: '1px solid #000',
            },
            '& .MuiFilledInput-root.MuiFilledInput-root.Mui-focused': {
              backgroundColor: '#fff',
              border: '2px solid #000',
            }
          }}
      />
    </Stack>
    <Stack sx={{mt: 1 , borderTop: '1px solid #D6D8E1'}}>
      <Typography variant="subtitle2" sx={{ m: '1em 0 0.2em 0.2em' }}>
        Customer organization
      </Typography>
      <TextField
      // value={'name'}
        onChange={console.log}
        placeholder="Unilever"
        InputProps={{
          sx: {
            height: '3em',
            borderRadius: '5px',   
          },
        }}
        sx={{
          width: { xs: 1, md: '100%' },
          height: '3em',
        }}
      />
      <Typography variant="subtitle2" sx={{ m: '1.2em 0 0.2em 0.2em' }}>
        Revenue estimation
      </Typography>
      <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          // value={radioValue}
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            padding: '0 0 1em 0',
            mr: '-1.4em',
            '@media (max-width: 600px)': {
            flexDirection: 'column',
            width: '20em',
            }
          }}
          onChange={(event) => {
            setRadioValue(event.target.value);
          }}
          >

          <CustomOption check={radioValue === 'N/A'} type='create' label="N/A" />
          <CustomOption check={radioValue === 'Low'} type='create'  label="Low" />
          <CustomOption check={radioValue === 'Medium'} type='create' label="Medium" />
          <CustomOption check={radioValue === 'High'} type='create' label="High" />
        </RadioGroup>

        <Typography variant="subtitle2" sx={{ m: '1.2em 0 0.2em 0.2em' }}>
          Participants
        </Typography>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1
        }}>
        <TextField
        value={Name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        InputProps={{
          sx: {
            height: '3.2em',
            borderRadius: '5px',   
          },
        }}
        sx={{
          width: '60%',
          height: '3.2em',
        }}
      />
          <FormControl
          sx={{
            flexShrink: 0,
            width: '20%',
          }}
        >
          <InputLabel>Position</InputLabel>

          <Select
            value={OptionsValue}
            onChange={(event) => setOptionsValue(event.target.value)}
            input={<OutlinedInput label="Position" />}
            MenuProps={{
              PaperProps: {
                sx: { maxHeight: '7em', },
              },
            }}
            sx={{
              height: '3.2em',
              borderRadius: '5px',
            }}
          >
            {positionOptions.map((option) => (
              <MenuItem key={option} value={option}>
               {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button sx={{
          width: '3.2em',
          height: '3.6em',
          borderRadius: '5px',
          backgroundColor: '#2292F9',
          color: '#fff',
            '&:hover': {
              backgroundColor: '#fff',
              color: '#2292F9',
              border: '2px solid #2292F9',
              }
          }}
          onClick={handleAddParticipant}
          >
          <Iconify icon="eva:plus-fill" />
        </Button>
        </Box>
        {participants.length > 0 && participants.map((item) => (
          <Participant item={item} key={item.id} setParticipants={setParticipants}/>
        ))}
    </Stack></>
  );

  const buttons = (
    <Stack>

    <Button sx={{
      width: '100%',
      height: '3.5em',
      borderRadius: '6px',
      backgroundColor: '#2292F9',
      fontWeight: 500,
      color: '#fff',
      '&:hover': {
      backgroundColor: '#fff',
      color: '#2292F9',
      border: '2px solid #2292F9',
      }
      }}>
      CONTINUE
    </Button>

    </Stack>
  );

  return (
    <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        slotProps={{
          backdrop: { invisible: true },
        }}
        PaperProps={{
          sx: { width: '32.5em' },
        }}
      >
        {renderHead}

        <Divider />

        <Scrollbar sx={{ px: 2.5, py: 3 }}>
          <Stack spacing={3}>
            {uploadFiles}

            {inputs}

            {buttons}
          </Stack>
        </Scrollbar>
      </Drawer>
  );
}

CreateDialog.propTypes = {
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  open: PropTypes.bool,
};
