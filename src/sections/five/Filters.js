import PropTypes from 'prop-types';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
// components
import Iconify from 'src/components/iconify';
import { SortByDialog } from 'src/components/Dialogs';
import { useState } from 'react';
// ----------------------------------------------------------------------

export default function Filters({
  openDateRange,
  onFilters,
  
}) {
  
  const [openSortBy, setOpenSortBy] = useState(false);

  const handleOpenSortBy = () => {
    setOpenSortBy(true);
  }

  const handleCloseSortBy = () => {
    setOpenSortBy(false);
  }

  const renderFilterName = (
    <TextField
      placeholder="Search..."
      InputProps={{
        sx: {
          height: '2.7em',          
        },
        startAdornment: (
          <InputAdornment position="start">
            <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', height: '2.7em' }} />
          </InputAdornment>
        ),
      }}
      sx={{
        width: { xs: 1, md: 260 },
        height: '2.7em',
      }}
    />
  );

  const renderFilterDate = (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      color: '#8e95a2'
    }}>
      <Button
        color="inherit"
        onClick={() => {
          // console.log('Author');
        }}
        startIcon={
          <Iconify
            icon={openDateRange ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
            sx={{ ml: -0.5 }}
          />
        }
      >
          Status
      </Button>
      <Button
        color="inherit"
        // onClick={() => {
        //   onOpenDateRange();
        // }}
        startIcon={
          <Iconify
            icon={openDateRange ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
            sx={{ ml: -0.5 }}
          />
        }
      >
          Time
      </Button>

      <Button
        color="inherit"
        onClick={() => {
          // console.log('Organization');
        }}
        startIcon={
          <Iconify
            icon={openDateRange ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
            sx={{ ml: -0.5 }}
          />
        }
      >
          Labels
      </Button>

      <Button
        color="inherit"
        // onClick={onOpenRevenueDialog}
        startIcon={
          <Iconify
            icon={openDateRange ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
            sx={{ ml: -0.5 }}
          />
        }
      >
          Created by
      </Button>

      <Button
        color="inherit"
        startIcon={
          <Iconify
            icon={openDateRange ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
            sx={{ ml: -0.5 }}
          />
        }
        onClick={handleOpenSortBy}
      >
          Sort
      </Button>
    </Box>
  );

  return (
    <Stack
      spacing={1}
      direction={{ xs: 'column', md: 'row' }}
      alignItems={{ xs: 'flex-end', md: 'center' }}
      sx={{ width: 1, padding: 3 }}
    >
      {renderFilterName}

      <Stack spacing={1} direction="row" alignItems="center" justifyContent="flex-end" flexGrow={1}>
        {renderFilterDate}

      </Stack>
      <SortByDialog onFilters={onFilters} open={openSortBy} onClose={handleCloseSortBy} />

    </Stack>
  );
}

Filters.propTypes = {
  onFilters: PropTypes.func,
  openDateRange: PropTypes.bool,
};
