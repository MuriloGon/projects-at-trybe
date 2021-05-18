import React from 'react';
import PropTypes from 'prop-types';
import RatingComments from './RatingComments';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <RatingComments { ...rating } />
    );
  }
}

Rating.propTypes = {
  rating: {
    id: PropTypes.string.isRequired,
    ratings: PropTypes.arrayOf({}).isRequired,
  }.isRequired,
};

export default Rating;
