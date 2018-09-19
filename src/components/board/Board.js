import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Deck } from '../deck/Deck';
import { DeckList } from '../deck/DeckList';
import { Card } from '../card/Card';
import { CardsPicked } from '../card/CardsPicked';

import { dealOneCard, shuffleDeck } from '../state/actions/DeckActions';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div className="container pt-5">
          <div className="row mx-auto">
            <div className="col d-flex justify-content-center">
              <button className="btn btn-outline-game mr-2" type="button" onClick={() => {
                if (this.props.picks.length === 52) {
                  return;
                }
                this.props.shuffleDeck(this.props.deck);}
              }>Shuffle</button>
              <button className="btn btn-outline-game" type="button" onClick={() => {
                if (this.props.picks.length === 52) {
                  return;
                }
                this.props.dealOneCard(this.props.deck);
              }}>Deal One Card</button>
            </div>
          </div>
          {
            <LoadingIndicator busy={this.props.fetching} />
          }
          <div className="row pt-5">
            <div className="col">
              <Deck />
              <DeckList cards={this.props.deck}/>
            </div>
            <div className="col">
              {
                this.props.fetched && this.props.pick && this.props.pick.suit && (
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <Card suit={this.props.pick.suit} value={this.props.pick.value} />
                    </div>
                  </div>
                )
              }
            </div>
            <div className="col">
              <CardsPicked cards={this.props.picks} />
            </div>
          </div>
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
  deck: PropTypes.array.isRequired,
  pick: PropTypes.object.isRequired,
  picks: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  const { deck, fetching, fetched, failed, pick, picks } = state.deck;

  return { fetching, fetched, failed, deck, pick, picks };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ dealOneCard,  shuffleDeck}, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Board);

export { hoc as Board };
