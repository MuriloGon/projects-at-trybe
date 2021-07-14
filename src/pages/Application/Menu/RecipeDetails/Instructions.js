import React from 'react';
import PropTypes from 'prop-types';

function Instructions({ instructions }) {
  return (
    <section data-testid="instructions">
      <h2>Instructions</h2>
      <p>
        {instructions}
      </p>
    </section>
  );
}

Instructions.propTypes = {
  instructions: PropTypes.string.isRequired,
};

export default Instructions;
