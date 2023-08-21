import { Box} from '@mui/material';
// src
import DetailsSection from '../DetailsSection';
import TakeawaysSection from '../TakeawaysSection';


// ----------------------------------------------------------------------


export default function DetailsView() {
  return (
    <Box
    sx={{
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 1,
      justifyContent: 'center',
    }}>
      <DetailsSection/>
      <TakeawaysSection/>
  </Box>
  );
}
