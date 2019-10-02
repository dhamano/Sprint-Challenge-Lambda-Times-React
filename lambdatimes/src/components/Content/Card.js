import React from 'react';

import PropTypes from 'prop-types';

import { CardDiv, Headline, Author, ImgContainer, ArticleImg, Span } from '../StyledComponents/StyledComponents';

const Card = props => {
  return (
    <CardDiv data-tab={props.tab}>
      <Headline>{props.headline}</Headline>
      <Author>
        <ImgContainer>
          <ArticleImg src={props.img} />
        </ImgContainer>
        <Span>By {props.author}</Span>
      </Author>
    </CardDiv>
  );
};

Card.propTypes = {
  headline: PropTypes.string,
  tab     : PropTypes.string,
  img     : PropTypes.string,
  author  : PropTypes.string
}

export default Card;
