import PropTypes from 'prop-types';
import { useCallback } from 'react';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
// components
import Iconify from 'src/components/iconify';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { CreateDialog, DateDialog, RevenueDialog, SortByDialog } from 'src/components/Dialogs';
import { useHomeData } from 'src/layouts/dashboard/config-navigation';
// ----------------------------------------------------------------------

export default function Filters({
  openDateRange,
  onCloseDateRange,
  onOpenDateRange,
  openRevenueDialog,
  onCloseRevenueDialog,
  onOpenRevenueDialog,
  openSortByDialog,
  onOpenSortByDialog,
  onCloseSortByDialog,
  openCreateDialog,
  onCloseCreateDialog,
  onOpenCreateDialog,
  filters,
  onFilters,
  dateError,
  
}) {

  const homeData = useHomeData()


  const handleFilterName = useCallback(
    (event) => {
      onFilters('name', event.target.value);
    },
    [onFilters]
  );

  const handleFilterStartDate = useCallback(
    (newValue) => {
      onFilters('startDate', newValue);
    },
    [onFilters]
  );

  const handleFilterEndDate = useCallback(
    (newValue) => {
      onFilters('endDate', newValue);
    },
    [onFilters]
  );

  const handelFilterTime = useCallback(
    (newValue) => {
      onFilters('Time', newValue);
    },
    [onFilters]
  )

  const handleFilterRevenue = useCallback(
    (newValue) => {
      onFilters('Revenue', newValue);
    }, [onFilters]
  )

  const renderFilterName = (
    <TextField
      value={filters.name}
      onChange={handleFilterName}
      placeholder="Search..."
      InputProps={{
        sx: {
          height: '2.7em',          
        },
        startAdornment: (
          <InputAdornment position="start">
            {homeData[0].searchIcon}
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
          Author
      </Button>
      <Button
        color="inherit"
        onClick={() => {
          onOpenDateRange();
        }}
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
          Organization
      </Button>

      <Button
        color="inherit"
        onClick={onOpenRevenueDialog}
        startIcon={
          <Iconify
            icon={openDateRange ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
            sx={{ ml: -0.5 }}
          />
        }
      >
          Revenue
      </Button>

      <Button
        color="inherit"
        onClick={() => {
          // console.log('Sentiment');
        }}
        startIcon={
          <Iconify
            icon={openDateRange ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
            sx={{ ml: -0.5 }}
          />
        }
      >
          Sentiment
      </Button>
      
      <Button
        color="inherit"
        onClick={onOpenSortByDialog}
        startIcon={
          <Iconify
            icon={openDateRange ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
            sx={{ ml: -0.5 }}
          />
        }
      >
          Sort
      </Button>

      <Button
        color="inherit"
        onClick={onOpenCreateDialog}
        sx={{
          width: '90px',
          height: '37px',
          borderRadius: '6px',
          // padding: '10px, 15px',
          backgroundColor: '#1A2638',
          padding: '1.5em 3.5em',
          color: '#FFF',
          '&:hover': {
            color: '#1A2638',
          },
        }}
        startIcon={
          <Iconify>
            <CloudUploadOutlinedIcon/>
          </Iconify>
        }
      >
          Create
      </Button>
      <CreateDialog open={openCreateDialog} onClose={onCloseCreateDialog} />

      <RevenueDialog
        handleFilterRevenue={handleFilterRevenue}
        open={openRevenueDialog}
        onClose={onCloseRevenueDialog}
      />
      <SortByDialog onFilters={onFilters} open={openSortByDialog} onClose={onCloseSortByDialog} />
      <DateDialog
        variant="calendar"
        startDate={filters.startDate}
        endDate={filters.endDate}
        onChangeStartDate={handleFilterStartDate}
        onChangeEndDate={handleFilterEndDate}
        open={openDateRange}
        onClose={onCloseDateRange}
        selected={!!filters.startDate && !!filters.endDate}
        error={dateError}
        handelFilterTime={handelFilterTime}
      />
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
    </Stack>
  );
}

Filters.propTypes = {
  dateError: PropTypes.bool,
  filters: PropTypes.object,
  onCloseDateRange: PropTypes.func,
  onFilters: PropTypes.func,
  onOpenDateRange: PropTypes.func,
  openDateRange: PropTypes.bool,
  openRevenueDialog: PropTypes.bool,
  onCloseRevenueDialog: PropTypes.func,
  onOpenRevenueDialog: PropTypes.func,
  openSortByDialog: PropTypes.bool,
  onOpenSortByDialog: PropTypes.func,
  onCloseSortByDialog: PropTypes.func,
  openCreateDialog: PropTypes.bool,
  onCloseCreateDialog: PropTypes.func,
  onOpenCreateDialog: PropTypes.func,
};
