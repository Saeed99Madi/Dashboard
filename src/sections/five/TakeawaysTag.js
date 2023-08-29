import React from 'react'

import PropTypes from 'prop-types'

import { CloseButton } from 'src/components/ShowingFiltersResult/Showing.styled';
// import Iconify from 'src/components/iconify/iconify';

export default function TakeawaysTag({
  tag
}) {


  return (

  <CloseButton sx={{backgroundColor: tag.bgColor, color: tag.color, borderRadius: '4px', ml: '0.5em'}}>
    {tag.name}
  {/* onClick={handleOnCloseDateRange} */}
    {/* <Iconify  icon="mingcute:close-line" /> */}
  </CloseButton>
  )
}

TakeawaysTag.propTypes = {
  tag: PropTypes.object
}