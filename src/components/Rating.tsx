import React from 'react';
// import PropTypes from 'prop-types';

interface IProps {
  rating: number;
}

class Rating extends React.Component<IProps> {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating" data-testid="rating">
        <span className="rating">{rating}</span>
      </div>
    );
  }
}

// Rating.propTypes = { rating: PropTypes.number };

// Rating.defaultProps = {
//   rating: 'undefined',
// };

export default Rating;
