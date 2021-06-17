import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TimerBar = styled.div`
  background-color: ${({ theme }) => theme.primary};
  height: 18px;
  transition: width 1000ms linear;
  border-radius: 3px;
  flex: 1;
`;

export default function TimeBar({ widthBar }) {
  return (
    <div style={ { flex: 1 } }>
      <TimerBar style={ { width: `${widthBar}%` } } />
    </div>
  );
}

TimeBar.propTypes = {
  widthBar: PropTypes.number.isRequired,
};
