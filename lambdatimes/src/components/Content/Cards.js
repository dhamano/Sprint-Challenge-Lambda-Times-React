import React, { Component } from 'react';
import Card from './Card';

import PropTypes from 'prop-types';

import { CardsDiv } from '../StyledComponents/StyledComponents';

const Cards = props => {
  return (
    <CardsDiv>
      {
        props.cards.map( (card, i) => {
          return <Card headline={card.headline} tab={card.tab} img={card.img} author={card.author} key={i} />
        })
      }
    </CardsDiv>
  )
}

Cards.propTypes = {
  cards     : PropTypes.arrayOf( PropTypes.shape({
    headline: PropTypes.string,
    tab     : PropTypes.string,
    img     : PropTypes.string,
    author  : PropTypes.string
  }))
}

export default Cards;