import React from 'react';
import Tab from './Tab';

import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {
          props.tabs.map( (tab, i) => {
            return <Tab selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} tab={tab} key={i} />
          })
        }
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tab             : PropTypes.string,
  selectedTab     : PropTypes.string,
  selectTabHandler: PropTypes.func
}

export default Tabs;
