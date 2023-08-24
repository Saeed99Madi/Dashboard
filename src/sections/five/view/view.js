import { useCallback, useContext, useEffect } from 'react';
import { Card, Container } from '@mui/material';
// src
import { useSettingsContext } from 'src/components/settings';
import { FiltersContext } from 'src/context/filtersContext';
import { useTable } from 'src/components/table';
import Filters from '../Filters';
import Takeaways from '../Takeaways';

// ----------------------------------------------------------------------


export default function FourView() {
  const settings = useSettingsContext();
  const {setFilters} = useContext(FiltersContext);
  const table = useTable({ defaultOrderBy: 'orderNumber' });

  const handleFilters = useCallback(
    (name, value) => {
      table.onResetPage();
      setFilters((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [setFilters, table] 
  );

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
      <Filters onFilters={handleFilters}/>
      <Takeaways/>
      </Card>
  </Container>
  );
}
