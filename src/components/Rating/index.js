import React from 'react';
import PropTypes from 'prop-types';
import RatingComments from './RatingComments';
import RatingForm from './RatingForm';

class Rating extends React.Component {
  render() {
    const { rating, addRating, id } = this.props;
    return (
      <div>
        <RatingForm addRating={ addRating } id={ id } />
        <RatingComments { ...rating } />
      </div>
    );
  }
}

Rating.propTypes = {
  id: PropTypes.string.isRequired,
  rating: PropTypes.arrayOf(PropTypes.object).isRequired,
  addRating: PropTypes.func.isRequired,
};

export default Rating;
