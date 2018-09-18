import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { dealOneCard, shuffleDeck } from '../state/actions/DeckActions';
// import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
// import { Error } from '../shared/Error/Error';


class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <button className="btn btn-outline-primary" type="button" onClick={() => {this.props.shuffleDeck(this.props.cards);}}>Shuffle</button>
        </div>
        <div className="col">
          <button className="btn btn-outline-primary" type="button" onClick={() => {this.props.dealOneCard(this.props.deck);}}>Deal One Card</button>
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  dealOneCard: PropTypes.func.isRequired,
  shuffleDeck: PropTypes.func.isRequired,
  fetched: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  failed: PropTypes.bool,
  cards: PropTypes.array.isRequired,
  deck: PropTypes.array,
  picked: PropTypes.object,
};

const mapStateToProps = state => {
  const { cards } = state.cards;
  const { deck, fetching, fetched, failed } = state.deck;

  return { fetching, fetched, failed, cards, deck };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ dealOneCard,  shuffleDeck}, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Board);

export { hoc as Board };
