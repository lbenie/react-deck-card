import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Deck } from '../deck/Deck';
import { Card } from '../card/Card';

import { dealOneCard, shuffleDeck } from '../state/actions/DeckActions';
// import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
// import { Error } from '../shared/Error/Error';
class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col">
            <button className="btn btn-outline-primary" type="button" onClick={() => {this.props.shuffleDeck(this.props.cards);}}>Shuffle</button>
          </div>
          <div className="col">
            <button className="btn btn-outline-primary" type="button" onClick={() => {this.props.dealOneCard(this.props.deck);}}>Deal One Card</button>
          </div>
        </div>
        <Deck />
        <div className="row">
          <Card suit={this.props.pick.suit} value={this.props.pick.value} />
        </div>
      </Fragment>
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
  pick: PropTypes.object,
};

const mapStateToProps = state => {
  const { cards } = state.cards;
  const { deck, fetching, fetched, failed, pick } = state.deck;

  return { fetching, fetched, failed, cards, deck, pick };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ dealOneCard,  shuffleDeck}, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Board);

export { hoc as Board };
