import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

import { tabData, cardData } from '../../data';
import { ContentContainer } from '../StyledComponents/StyledComponents';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    })
  }

  changeSelected = tab => {
    this.setState({
      selected: tab
    })
  };

  filterCards = () => {
    let cardFilterArr = this.state.cards.filter( cardInfo => this.state.selected === 'all' ? cardInfo : this.state.selected === cardInfo.tab && cardInfo )
    return cardFilterArr;
  };

  render() {
    return (
      <ContentContainer>
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={this.changeSelected} />
        <Cards cards={this.filterCards()} />
      </ContentContainer>
    );
  }
}
