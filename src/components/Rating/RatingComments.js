import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingComments extends Component {
  render() {
    const { ratings = [] } = this.props;

    if (ratings.length === 0) return <h1>Avalie esse produto.</h1>;

    const comments = ratings
      .map(({ email, comment, stars }) => (
        <section key={ email }>
          <h2>{ email }</h2>
          <span>{ comment }</span>
          <h2>{ stars }</h2>
        </section>
      ));

    return comments;
  }
}

RatingComments.propTypes = {
  email: PropTypes.string,
  comments: PropTypes.string,
  stars: PropTypes.number,
}.isRequired;

export default RatingComments;
