import styled, { keyframes } from 'styled-components';

const animLeft = keyframes` /* animLeft */
  0% { transform: rotate(0deg) translateY(0%); }

  100% { transform: rotate(30deg) translateY(10%); }
`;

const animRight = keyframes` /* animLeft */
  0% { transform: rotate(0deg) translateY(0%); }

  100% { transform: rotate(30deg) translateY(10%); }
`;

const animMain = keyframes` /* animLeft */
  0% { transform: translateY(0%); }

  100% { transform: translateY(0.5%); }
`;

const animLoadingMsg = keyframes` /* animLoadingMsg */
  16% { content: '*..'; }

  34% { content: '.*.'; }

  84% { content: '..*';  }
`;

export const LoadingContainer = styled.div`/* LoadingContainer */
  align-items: center;
  display: flex;
  flex-flow: nowrap column;
  height: calc(100vh - calc(2 * 50px));
  justify-content: center;

  h2 {
    color: ${({ theme }) => theme.primary1};
    font-size: 26px;
    margin-block: 20px;

    &:after {
      animation: 500ms linear 0s ${animLoadingMsg} infinite;
      content: '*..';
    }
  }
`;

export const Persona = styled.div` /* Persona */
  height: 266px;
  overflow: hidden;
  position: relative;
  transform: scale(0.65);
  width: 500px;

  --timeAnimation: 250ms;

  .left {
    animation: var(--timeAnimation) ease-in-out 0s ${animLeft} alternate-reverse infinite;
    position: absolute;
    top: 70px;
    transform-origin: bottom right;
  }

  .main {
    animation: var(--timeAnimation) linear 0s ${animMain} alternate infinite;
    left: 125px;
    position: absolute;
    transform-origin: center;
  }

  .right {
    animation: var(--timeAnimation) ease-in-out 0s ${animRight} alternate infinite;
    left: 310px;
    position: absolute;
    top: 95px;
    transform-origin: bottom left;
  }
`;
