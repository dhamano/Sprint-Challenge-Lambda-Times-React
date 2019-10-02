import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const LeftContainer = styled.div``;
const MidContainer = styled.div``;
const RightContainer = styled.div``;
const Spans = styled.span``;

const NavEl = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;

  ${Container} {
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;

    @media (min-width: 1280px) {
      & {
        width: 1280px;
      }
    }

    ${LeftContainer} {
      display: flex;
      justify-content: none;
      align-items: center;
      flex-direction: row;
      flex: 1;
      font-size: 11px;

      ${Spans} {
        cursor: pointer;
        margin-right: 25%;
        font-weight: bold;
      }
    }

    ${MidContainer} {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex: 3;
      font-size: 9px;

      ${Spans} {
        cursor: pointer;
        margin-right: 5%;

        &:last-child {
          margin-right: 0;
        }

        &:hover {
          text-decoration: underline;
        }
      }
    }

    ${RightContainer} {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: row;
      flex: 1;
      font-size: 11px;
      font-weight: bold;

      ${Spans} {
        cursor: pointer;
      }
    }
  }
`;

const TopBar = () => {
  return (
    <NavEl>
      <Container>
        <LeftContainer>
          <Spans>TOPICS</Spans><Spans>SEARCH</Spans>
        </LeftContainer>
        <MidContainer>
          <Spans>GENERAL</Spans><Spans>BROWNBAG</Spans><Spans>RANDOM</Spans><Spans>MUSIC</Spans><Spans>ANNOUNCEMENTS</Spans>
        </MidContainer>
        <RightContainer>
          <Spans>LOG IN</Spans>
        </RightContainer>
      </Container>
    </NavEl>
  )
}

export default TopBar;