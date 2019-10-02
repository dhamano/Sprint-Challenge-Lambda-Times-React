import React from 'react';
import { HeadEl, Span, Adate, Temperature, Banner } from './StyledComponents/StyledComponents';

const Header = () => {
  return (
    <Banner>
      <Adate>MARCH 31, 2018</Adate>
      <HeadEl>Lambda Times</HeadEl>
      <Temperature>98°</Temperature>
    </Banner>
  )
}

export default Header