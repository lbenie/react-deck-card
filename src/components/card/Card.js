import React from 'react';
import PropTypes from 'prop-types';
import { isBlack } from './utils';

export const Card = (props) => {
  return (
    <div className="row">
      <div className="col-1 mr-3">
        <p>Picked</p>
      </div>
      <div className="col">
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
      </div>
    </div>
  );
};

Card.propTypes = {
  suit: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
