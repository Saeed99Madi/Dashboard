import { useCallback, useContext, useState } from 'react';
// @mui
import { Card, Table, TableBody, TableContainer, Container } from '@mui/material';
// src
import { useSettingsContext } from 'src/components/settings';
import { useTable } from 'src/components/table';
import { _orders } from 'src/_mock/_order';
import { useBoolean } from 'src/hooks/use-boolean';
import Scrollbar from 'src/components/scrollbar/scrollbar';
import { applyFilter } from 'src/layouts/_common/searchbar/utils';
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import ShowingFiltersResult from 'src/components/ShowingFiltersResult';
import { FiltersContext } from 'src/context/filtersContext';
import TableHeadCustom from '../table-head-custom';
import { emptyRows, getComparator } from '../utils';
import OrderTableRow from '../order-table-row';
import TableEmptyRows from '../table-empty-rows';
import TableNoData from '../table-no-data';
import Filters from '../Filters';
import TablePaginationCustom from '../TablePaginationCustom';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'meetingReport', label: 'Meeting Report', width: '27%', isNavMiniWidth: '24%' },
  { id: 'createdBy', label: 'Created by', width: '15%', isNavMiniWidth: '23%' },
  { id: 'customer', label: 'Customer', width: '15%', isNavMiniWidth: '23%' },
  { id: 'uploaded', label: 'Uploaded', width: '11%', align: 'center', isNavMiniWidth: '10%' },
  { id: 'sentiment', label: 'Sentiment', width: '11%', isNavMiniWidth: '10%' },
  { id: 'participants', label: 'Participants', width: '11%', isNavMiniWidth: '5%' },
  { id: 'takeaway', label: 'Takeaway', width: '10%', isNavMiniWidth: '5%' },
];


export default function FourView() {
  const table = useTable({ defaultOrderBy: 'orderNumber' });
  const settings = useSettingsContext();
  const {filters,
    setFilters,
    handleResetDateRange,
    handleCloseRevenueDialog,
    handleCloseSortBy
  } = useContext(FiltersContext);
  const [tableData, setTableData] = useState(_orders);

  const router = useRouter();

  // const confirm = useBoolean();
  const openDateRange = useBoolean();
  const openRevenueDialog = useBoolean();
  const openSortByDialog = useBoolean();
  const openCreateDialog = useBoolean();


  const dateError =
  filters.startDate && filters.endDate
    ? filters.startDate.getTime() > filters.endDate.getTime()
    : false;

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator,
    filters,
    dateError,
  });

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


const canReset =
  !!filters.name || filters.status !== 'all' || (!!filters.startDate && !!filters.endDate);


  const denseHeight = table.dense ? 52 : 72;

  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

  const handleDeleteRow = useCallback(
    (id) => {
      const deleteRow = tableData.filter((row) => row.id !== id);
      setTableData(deleteRow);
      table.onUpdatePageDeleteRow(dataFiltered.length);
    },
    [dataFiltered.length, table, tableData]
  );

  const handleViewRow = useCallback(
    (id) => {
      router.push(paths.dashboard.details(id));
    },
    [router]
  );


  const handleOnCloseDateRange = useCallback((type) => {
    openDateRange.onFalse();
    if (type !== 'continue') {
      handleResetDateRange();
    }
  }, [handleResetDateRange, openDateRange]);
  
  const handleCloseRevenue = useCallback((type) => {
    openRevenueDialog.onFalse();
    if (type !== 'continue') {
      handleCloseRevenueDialog();
    }
  }, [handleCloseRevenueDialog, openRevenueDialog]
  );

  const handleCloseSortByDialog = useCallback((type) => {
    openSortByDialog.onFalse();
    if (type !== 'continue') {
      handleCloseSortBy();
    }
  }, [handleCloseSortBy, openSortByDialog])
  
  return (
    <Container
      maxWidth={settings.themeStretch ? false : 'xl'}
      sx={{
        '& .MuiPaper-root.MuiPaper-elevation': {
          border: '1px solid #D6D8E1'
        }
      }}
    >
      <Card sx={{ m: '0 -1em' }}>
        <Filters
          openDateRange={openDateRange.value}
          onCloseDateRange={handleOnCloseDateRange}
          onOpenDateRange={openDateRange.onTrue}
          openRevenueDialog={openRevenueDialog.value}
          onCloseRevenueDialog={handleCloseRevenue}
          onOpenRevenueDialog={openRevenueDialog.onTrue}
          openSortByDialog={openSortByDialog.value}
          onOpenSortByDialog={openSortByDialog.onTrue}
          onCloseSortByDialog={handleCloseSortByDialog}
          openCreateDialog={openCreateDialog.value}
          onCloseCreateDialog={openCreateDialog.onFalse}
          onOpenCreateDialog={openCreateDialog.onTrue}
          filters={filters}
          onFilters={handleFilters}
          dateError={dateError}
          onContinueDateDialog={openDateRange.onFalse}
        />
          <ShowingFiltersResult
            handleOnCloseDateRange={handleOnCloseDateRange}
            handleOnCloseRevenue={handleCloseRevenue}
          />
          <TableContainer
            sx={{
              position: 'relative',
              overflow: 'unset',
              m: ' 0 25px',
              maxWidth: 'calc(100% - 50px)',
            }}
          >
            <Scrollbar>
              <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 960 }}>
                <TableHeadCustom
                  order={table.order}
                  orderBy={table.orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={tableData.length}
                  numSelected={table.selected.length}
                />

                <TableBody>
                  {!table.dense ? 
                    dataFiltered
                    .slice(
                      table.page * table.rowsPerPage,
                      table.page * table.rowsPerPage + table.rowsPerPage
                    )
                      .map((row) => (
                        <OrderTableRow
                          key={row.id}
                          row={row}
                          selected={table.selected.includes(row.id)}
                          onDeleteRow={() => handleDeleteRow(row.id)}
                          onViewRow={() => handleViewRow(row.id)}
                        />
                      )) :
                      dataFiltered
                      .map((row) => (
                        <OrderTableRow
                          key={row.id}
                          row={row}
                          selected={table.selected.includes(row.id)}
                          onDeleteRow={() => handleDeleteRow(row.id)}
                          onViewRow={() => handleViewRow(row.id)}
                        />
                      ))
                  }

                  <TableEmptyRows
                    height={denseHeight}
                    emptyRows={emptyRows(table.page, table.rowsPerPage, tableData.length)}
                  />

                  <TableNoData notFound={notFound} />
                </TableBody>
              </Table>
            </Scrollbar>
          </TableContainer>
          <TablePaginationCustom
            count={dataFiltered.length}
            page={table.page}
            rowsPerPage={table.rowsPerPage}
            onPageChange={table.onChangePage}
            onRowsPerPageChange={table.onChangeRowsPerPage}
            //
            dense={table.dense}
            onChangeDense={table.onChangeDense}
          />
        </Card>
    </Container>
  );
}
