export default {
  'footer-height': '50px',
  'header-height': '50px',
  'category-bar-heigth': '50px',
  background: 'white',
  primary1: 'hsla(194deg, 58%, 37%, 100%)',
  primary2: 'hsla(194deg, 45%, 55%, 100%)',
  secondary1: 'hsla(117deg, 60%, 35%, 100%)',
  secondary2: 'hsla(117deg, 51%, 90%, 100%)',
  accent1: 'hsla(295deg, 79%, 69%, 100%)',
  accent2: 'hsla(295deg, 100%, 95%, 100%)',
};

const pickColor = (color) => ({ theme }) => theme[color];

export const background = pickColor('background');
export const primary1 = pickColor('primary1');
export const primary2 = pickColor('primary2');
export const secondary1 = pickColor('secondary1');
export const secondary2 = pickColor('secondary2');
export const accent1 = pickColor('accent1');
export const accent2 = pickColor('accent2');
export const footerHeight = pickColor('footer-height');
export const headerHeight = pickColor('header-height');
export const categoryBarHeight = pickColor('category-bar-heigth');

export const colorVariant = {
  primary: { color1: primary1, color2: primary2 },
  secondary: { color1: secondary1, color2: secondary2 },
  accent: { color1: accent1, color2: accent2 },
};
