import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';

import { AppDiv } from './components/StyledComponents/StyledComponents';

const App = () => {
  return (
    <AppDiv>
      <TopBar />
      <Header />
      <Content />
    </AppDiv>
  );
}

export default App;
