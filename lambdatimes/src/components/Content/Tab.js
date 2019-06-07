import React from 'react';

import PropTypes from 'prop-types';

import { TabDiv, ActiveTab } from '../StyledComponents/StyledComponents';

const Tab = props => {
  return (
    props.tab === props.selectedTab ?
    <ActiveTab onClick={() => { {props.selectTabHandler(props.tab)} }} >{props.tab.toUpperCase()}</ActiveTab>
    :
    <TabDiv onClick={() => { {props.selectTabHandler(props.tab)} }} >{props.tab.toUpperCase()}</TabDiv>
  );
};

Tab.propTypes = {
  tab             : PropTypes.string,
  selectedTab     : PropTypes.string,
  selectTabHandler: PropTypes.func
}

export default Tab;
