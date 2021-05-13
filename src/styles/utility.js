import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
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
    return () => { clearTimeout(time); console.log('oi') };
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

PopAnimation.defaultProps = {
  children: [],
};

export { Container, PopAnimation };
