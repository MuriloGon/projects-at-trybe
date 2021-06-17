import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from './TimerIcon';
import TimeBar from './TimerBar';

const TimerIconAndBarInline = styled.div`
  display: flex;
  align-items: center;
`;

export default function Timer({ time }) {
  return (
    <div>
      <TimerIconAndBarInline>
        <Icon />
        <TimeBar widthBar={ time } />
      </TimerIconAndBarInline>
    </div>
  );
}

Timer.propTypes = {
  time: PropTypes.number.isRequired,
};
