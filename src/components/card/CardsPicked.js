import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


export const CardsPicked = (props) => {
  const lis = props.cards.map((card, index) => <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>{card.suit} {card.value}</li>);
  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Number of cards picked
        <span className="badge badge-primary badge-pill">{props.cards.length}</span>
      </li>
      {lis.length < 8 && lis}
      {
        lis.length >= 8 && (
          <Fragment>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              ...
            </li>
            {lis.slice(-4)}
          </Fragment>
        )
      }
    </ul>
  );
};

CardsPicked.propTypes = {
  cards: PropTypes.array.isRequired
};
