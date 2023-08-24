import { Box} from '@mui/material';
// src
import { CreateDialog } from 'src/components/Dialogs';
import { useState } from 'react';
import DetailsSection from '../DetailsSection';
import TakeawaysSection from '../TakeawaysSection';


// ----------------------------------------------------------------------


export default function DetailsView() {
  const [openEditSide, setOpenEditSide] = useState(false);
  const handleOpenEditSide = () => {
    setOpenEditSide(true);
  }

  const handleCloseEditSide = () => {
    setOpenEditSide(false);
  }

  return (
    <Box
    sx={{
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 1,
      justifyContent: 'center',
    }}>
      <DetailsSection handleOpenEditSide={handleOpenEditSide}/>
      <TakeawaysSection/>
      <CreateDialog open={openEditSide} onClose={handleCloseEditSide} />
  </Box>
  );
}
