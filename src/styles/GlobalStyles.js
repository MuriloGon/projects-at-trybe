import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`/* Global Styles */
  * { margin: 0; }

  a, a:hover, a:focus, a:active {
    color: inherit;
    text-decoration: none;
  }
`;
