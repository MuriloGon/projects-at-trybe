/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    position: fixed;
    right: 2.5vh;
    bottom: 2.5vh;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: white;
    background: hsl(190deg,50%,50%);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    user-select: none;
    transition: transform 0.15s ease, opacity 0.15s linear;
    :hover {
      background-color: hsl(190deg,50%,30%);
      cursor: pointer;
    }
    &.hide-btn {
      transform: scale(0);
      opacity: 0;
    }
`;

interface Props {
  containerRef: HTMLElement | null
}

const ToUpButton: FC<Props> = (props) => {
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const perc = window.scrollY;
      if (perc < window.screenY) {
        btnRef.current?.classList.add('hide-btn');
      } else {
        btnRef.current?.classList.remove('hide-btn');
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  const handleClick = () => {
    const { containerRef } = props;
    if (containerRef !== null) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Div
      className="hide-btn"
      onClick={handleClick}
      ref={btnRef}
    >
      ⬆
    </Div>
  );
};

export default ToUpButton;
