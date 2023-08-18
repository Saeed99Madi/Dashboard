import { createContext, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

export const FiltersContext = createContext({})

export const defaultFilters = {
  Author: '',
  Time: '',
  Organization: null,
  Sentiment: null,
  startDate: '',
  endDate: '',
  Revenue: [],
  SortBy: '',
};
export const FiltersContextProvider = ({children}) => {
  const [filters, setFilters] = useState(defaultFilters);

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  const values = useMemo(() => ({
    filters,
    setFilters,
    handleResetFilters,
  }), [filters, handleResetFilters]);

  return (
    <FiltersContext.Provider value={values}>
      {children}
    </FiltersContext.Provider>
  )

}

FiltersContextProvider.propTypes = {
  children: PropTypes.node,
};
