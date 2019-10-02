import React from 'react';
import styled from 'styled-components';

const HeadEl = styled.h1``;
const Span = styled.span``;
const Adate = styled(Span)``;
const Temperature = styled(Span)``;

const Banner = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

  @media (min-width: 1280px) {
    & {
      width: 1280px;
    }
  }

  ${HeadEl} {
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  }

  ${Span} {
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  }

  ${Adate} {
    margin-left: 25px;
    flex: 1;
  }

  ${Temperature} {
    text-align: right;
    margin-right: 25px;
    flex: 1;
  }
`;

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