import { createGlobalStyle } from 'styled-components';
import { secondary1, secondary2 } from './theme';

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

  /* width */
  ::-webkit-scrollbar {

    --handle-size: 4px;
    height: var(--handle-size);
    width: var(--handle-size);
  }

  /* Track */
  ::-webkit-scrollbar-track { background: ${secondary2}; }

  /* Handle */
  ::-webkit-scrollbar-thumb { background: ${secondary1}; }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover { background: #555; }
`;
