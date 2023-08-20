import React from 'react'

import PropTypes from 'prop-types'

import { CloseButton } from 'src/components/ShowingFiltersResult/Showing.styled';
import Iconify from 'src/components/iconify/iconify';

export default function TakeawaysTag({
  label,
  color,
  bgColor
}) {


  return (

  <CloseButton sx={{backgroundColor: bgColor, color, borderRadius: '4px', ml: '0.5em'}}>
    {label}
  {/* onClick={handleOnCloseDateRange} */}
    <Iconify  icon="mingcute:close-line" />
  </CloseButton>
  )
}

TakeawaysTag.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string
}