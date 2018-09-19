import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCards } from '../state/actions/DeckActions';

class Deck extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCards();
  }

  render() {
    return (
      <div>
        { this.props.fetched && (
          <div className="row">
            <div className="col-1">
              <p>Deck</p>
            </div>
            <div className="col">
              <div className="deck">
                {
                  this.props.deck.length === 52 && <div className="card"></div>
                }
                {
                  this.props.deck.length > 39 && <div className="card"></div>
                }
                {
                  this.props.deck.length > 26 && <div className="card"></div>
                }
                {
                  this.props.deck.length > 13 && <div className="card"></div>
                }
                {
                  this.props.deck.length > 0 && <div className="card"></div>
                }
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Deck.propTypes = {
  fetchCards: PropTypes.func.isRequired,
  fetched: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  failed: PropTypes.bool,
  deck: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  const { fetching, fetched, failed, deck } = state.deck;

  return { fetching, fetched, failed, deck };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchCards }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Deck);

export { hoc as Deck };
