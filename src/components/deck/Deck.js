import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCards } from '../state/actions/DeckActions';
import { LoadingIndicator } from '../shared/loadingIndicator/LoadingIndicator';
import { Error } from '../shared/error/Error';


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
            <p>Deck</p>
            <div className="col">
              <div className="deck">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
              </div>
            </div>
          </div>
        )}
        {
          <LoadingIndicator busy={this.props.fetching} />
        }
        {
          this.props.failed && <Error message="Failed to fetch list of cards" />
        }
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
