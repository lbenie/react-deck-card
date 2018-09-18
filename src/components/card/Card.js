import React from 'react';
import PropTypes from 'prop-types';

const isBlack = suit => suit === '♣︎' || suit === '♠︎';

export const Card = (props) => {
  return (
    <div className={'card card-' + (isBlack(props.suit) ? 'black' : 'red')}>
      <div className="card-tl">
        <div className="card-value">{props.value}</div>
        <div className="card-suit">{props.suit}</div>
      </div>
      <div className="card-br">
        <div className="card-value">{props.value}</div>
        <div className="card-suit">{props.suit}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  suit: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
