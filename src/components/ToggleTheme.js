import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import themeImage from '../assets/toggle.svg';

const Div = styled.div`border-radius: 50%;
  color: red;
  cursor: pointer;
  height: 50px;
  overflow: hidden;
  width: 50px;

  :hover {
    filter: hue-rotate(340deg) saturate(150%);
  }

  img {
    overflow: hidden;
    transform: translate(-30%, -50%) rotateZ(0deg);
    transform-origin: center center;
    transition: transform 0.25s cubic-bezier(0.6, -0.58, 0, 1.51);
    user-select: none;
  }

  .light {
    overflow: hidden;
    transform: translate(-30%, -50%) rotateZ(180deg);
  }

  .dark {
    overflow: hidden;
    transform: translate(-30%, -50%) rotateZ(0deg);
  }
`;

const ToggleTheme = ({ onClick, currentTheme }) => (
  <Div onClick={ onClick }>
    <img className={ currentTheme } src={ themeImage } alt="current theme" />
  </Div>
);

ToggleTheme.propTypes = {
  onClick: PropTypes.func.isRequired,
  currentTheme: PropTypes.string.isRequired,
};

export default ToggleTheme;
