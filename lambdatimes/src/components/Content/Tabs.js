import React from 'react';
import Tab from './Tab';

import PropTypes from 'prop-types';
import { TabsDiv, Topics,Title } from '../StyledComponents/StyledComponents';

const Tabs = props => {
  return (
    <TabsDiv>
      <Topics>
        <Title>TRENDING TOPICS:</Title>
        {
          props.tabs.map( (tab, i) => {
            return <Tab selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} tab={tab} key={i} />
          })
        }
      </Topics>
    </TabsDiv>
  );
};

Tabs.propTypes = {
  tab             : PropTypes.string,
  selectedTab     : PropTypes.string,
  selectTabHandler: PropTypes.func
}

export default Tabs;
