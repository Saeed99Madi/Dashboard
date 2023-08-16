import { useCallback, useEffect, useState } from 'react';
// @mui
import { Card, Table, TableBody, TableContainer, Container, Typography } from '@mui/material';
import { useSettingsContext } from 'src/components/settings';
import { useTable } from 'src/components/table';
import { _orders } from 'src/_mock/_order';
import { useBoolean } from 'src/hooks/use-boolean';
import Scrollbar from 'src/components/scrollbar/scrollbar';
import { applyFilter } from 'src/layouts/_common/searchbar/utils';
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import TableHeadCustom from '../table-head-custom';
import { emptyRows, getComparator } from '../utils';
import OrderTableRow from '../order-table-row';
import TableEmptyRows from '../table-empty-rows';
import TableNoData from '../table-no-data';
import Filters from '../Filters';

// ----------------------------------------------------------------------
const defaultFilters = {
  Author: '',
  Time: '',
  Organization: null,
  Sentiment: null,
  startDate: null,
  endDate: null,
  Revenue: [],
  SortBy: '',
};

const TABLE_HEAD = [
  { id: 'meetingReport', label: 'Meeting Report', width: 300 },
  { id: 'createdBy', label: 'Created by', width: 180 },
  { id: 'customer', label: 'Customer', width: 150 },
  { id: 'uploaded', label: 'Uploaded', width: 130, align: 'center' },
  { id: 'sentiment', label: 'Sentiment', width: 140 },
  { id: 'participants', label: 'Participants', width: 100 },
  { id: 'takeaway', label: 'Takeaway', width: 100 },
];


export default function FourView() {
  const table = useTable({ defaultOrderBy: 'orderNumber' });
  const settings = useSettingsContext();
  const [filters, setFilters] = useState(defaultFilters);
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
    [table]
  );

const canReset =
  !!filters.name || filters.status !== 'all' || (!!filters.startDate && !!filters.endDate);

  const handleResetFilters = useCallback(() => {
    // setFilters(defaultFilters);
  }, []);
  

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
      router.push(paths.dashboard.order.details(id));
    },
    [router]
  );

  const handleOnCloseDateRange = useCallback(() => {
    openDateRange.onFalse();
    handleResetFilters();
  }, [handleResetFilters, openDateRange]);
  
  const handleCloseRevenueDialog = useCallback(() => {
    openRevenueDialog.onFalse();
    handleResetFilters();
  }, [handleResetFilters, openRevenueDialog]
  );
  

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Page Four </Typography>

      <Card>
        <Filters
          openDateRange={openDateRange.value}
          onCloseDateRange={handleOnCloseDateRange}
          onOpenDateRange={openDateRange.onTrue}
          openRevenueDialog={openRevenueDialog.value}
          onCloseRevenueDialog={handleCloseRevenueDialog}
          onOpenRevenueDialog={openRevenueDialog.onTrue}
          openSortByDialog={openSortByDialog.value}
          onOpenSortByDialog={openSortByDialog.onTrue}
          onCloseSortByDialog={openSortByDialog.onFalse}
          openCreateDialog={openCreateDialog.value}
          onCloseCreateDialog={openCreateDialog.onFalse}
          onOpenCreateDialog={openCreateDialog.onTrue}
          filters={filters}
          onFilters={handleFilters}
          dateError={dateError}
          handleResetFilters={handleResetFilters}
        />
          <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
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
                  {dataFiltered
                    .map((row) => (
                      <OrderTableRow
                        key={row.id}
                        row={row}
                        selected={table.selected.includes(row.id)}
                        onDeleteRow={() => handleDeleteRow(row.id)}
                        onViewRow={() => handleViewRow(row.id)}
                      />
                    ))}

                  <TableEmptyRows
                    height={denseHeight}
                    emptyRows={emptyRows(table.page, table.rowsPerPage, tableData.length)}
                  />

                  <TableNoData notFound={notFound} />
                </TableBody>
              </Table>
            </Scrollbar>
          </TableContainer>
        </Card>
    </Container>
  );
}
