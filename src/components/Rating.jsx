import React from 'react';
import PropTypes from 'prop-types';

export default class Rating extends React.Component {
  render() {
    const { rate } = this.props;
    return (
      <span>{rate}</span>
    );
  }
}

Rating.propTypes = {
  rate: PropTypes.number.isRequired,
};
