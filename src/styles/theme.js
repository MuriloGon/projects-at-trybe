export default {
  background: 'tomato',
  color1: 'white',
  color2: 'black',
  'footer-height': '50px',
  'header-height': '50px',
  primary1: 'hsla(194deg, 58%, 37%, 100%)',
  primary2: 'hsla(194deg, 45%, 55%, 100%)',
  secondary1: 'hsla(177deg, 60%, 35%, 100%)',
  secondary2: 'hsla(177deg, 51%, 90%, 100%)',
  accent1: 'hsla(295deg, 79%, 69%, 100%)',
  accent2: 'hsla(295deg, 100%, 95%, 100%)',
};

export const primary1 = ({ theme }) => theme.primary1;
export const primary2 = ({ theme }) => theme.primary2;
export const secondary1 = ({ theme }) => theme.secondary1;
export const secondary2 = ({ theme }) => theme.secondary2;
export const footerHeight = (theme) => theme['footer-heigth'];
export const headerHeight = (theme) => theme['header-heigth'];
