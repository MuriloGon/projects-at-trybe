import styled from 'styled-components';

export default styled.button` /* share button */
  align-items: center;
  background: unset;
  border: unset;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 50px;

  &:active {
    border-radius: 50%;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.15);
  }
`;
