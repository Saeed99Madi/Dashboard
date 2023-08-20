import { useContext, useEffect } from 'react';
import { Card, Container } from '@mui/material';
// src
import { useSettingsContext } from 'src/components/settings';
import { FiltersContext } from 'src/context/filtersContext';
import Filters from '../Filters';
import Takeaways from '../Takeaways';

// ----------------------------------------------------------------------


export default function FourView() {
  const settings = useSettingsContext();
  const {filters} = useContext(FiltersContext);

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
  <Container
    maxWidth={settings.themeStretch ? false : 'xl'}
    sx={{
      '& .MuiPaper-root.MuiPaper-elevation': {
        border: '1px solid #D6D8E1',
        borderRadius: 1.5
      }
    }}
  >
    <Card sx={{ m: '0 -1em' }}>
      <Filters/>
      <Takeaways/>
      </Card>
  </Container>
  );
}
