import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { maxWidth } from './variables';

const Container = styled.div`margin: 0 auto;
  max-width: ${maxWidth}px;
`;

const PopAnimation = ({ children }) => {
  const [active, setActive] = useState(false);

  useState(() => {
    const timeout = 25;
    const time = setTimeout(() => {
      setActive(true);
    }, timeout);
    return () => { clearTimeout(time); };
  }, []);

  return (
    <CSSTransition
      in={ active }
      // mountOnEnter
      classNames="cardim"
      timeout={ 250 }
    >
      {children}
    </CSSTransition>
  );
};

PopAnimation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { Container, PopAnimation };
