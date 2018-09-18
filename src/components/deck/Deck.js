import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCards } from '../state/actions/CardActions';
import { Card } from '../Card/Card';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';


const renderCards = cards => (
  cards.map(({suit, value}, index) => <Fragment key={index}><Card  suit={suit} value={value} /></Fragment>)
);

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
          <Fragment>
            {renderCards(this.props.cards)}
          </Fragment>
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
  cards: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  const { fetching, fetched, failed, cards } = state.cards;

  return { fetching, fetched, failed, cards };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchCards }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Deck);

export { hoc as Deck };
