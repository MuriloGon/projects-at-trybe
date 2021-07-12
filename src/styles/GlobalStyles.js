import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`/* Global Styles */

  @import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap') ;

  * {
    font-family: Roboto , Arial , Helvetica , sans-serif;
    font-size: 16px;
    margin: 0;
  }

  a, a:hover, a:focus, a:active {
    color: inherit;
    text-decoration: none;
  }
`;
