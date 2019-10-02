import React, { Component } from 'react';
import Card from './Card';

import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {
        props.cards.map( (card, i) => {
          return <Card headline={card.headline} tab={card.tab} img={card.img} author={card.author} key={i} />
        })
      }
    </div>
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