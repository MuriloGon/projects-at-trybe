import React from 'react';
import PropTypes from 'prop-types';

export default class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <span>{rating}</span>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
