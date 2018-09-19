import React from 'react';
import PropTypes from 'prop-types';
import { isBlack } from '../card/utils';

export const DeckList = (props) => {
  const lis = props.cards.map(({suit, value}, index) => <li className={'list-group-item d-flex justify-content-between align-items-center ' + (isBlack(suit) ? 'black' : 'red')} key={index}>{suit} {value}</li>);
  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Cards in the deck
        <span className="badge badge-primary badge-pill">{props.cards.length}</span>
      </li>
      {lis.slice(0, 4)}
      {
        lis.length > 0 && (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            ...
          </li>
        )
      }
    </ul>
  );
};

DeckList.propTypes = {
  cards: PropTypes.array.isRequired
};
