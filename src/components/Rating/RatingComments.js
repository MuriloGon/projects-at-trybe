import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingComments extends Component {
  render() {
    const { email, comments, stars } = this.props;
    return (
      <section>
        <h2>{ email }</h2>
        <span>{ comments }</span>
        <h2>{ stars }</h2>
      </section>
    );
  }
}

RatingComments.propTypes = {
  email: PropTypes.string,
  comments: PropTypes.string,
  stars: PropTypes.number,
}.isRequired;

export default RatingComments;
