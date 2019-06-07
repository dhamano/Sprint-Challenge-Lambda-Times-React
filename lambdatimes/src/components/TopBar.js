import React from 'react';

import { Container, LeftContainer, MidContainer, RightContainer, Span, NavEl } from './StyledComponents/StyledComponents';

const TopBar = () => {
  return (
    <NavEl>
      <Container>
        <LeftContainer>
          <Span>TOPICS</Span><Span>SEARCH</Span>
        </LeftContainer>
        <MidContainer>
          <Span>GENERAL</Span><Span>BROWNBAG</Span><Span>RANDOM</Span><Span>MUSIC</Span><Span>ANNOUNCEMENTS</Span>
        </MidContainer>
        <RightContainer>
          <Span>LOG IN</Span>
        </RightContainer>
      </Container>
    </NavEl>
  )
}

export default TopBar;