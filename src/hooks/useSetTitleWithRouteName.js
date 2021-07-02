import { useEffect } from 'react';

import { useLocation } from 'react-router';

const pickGroups = (str, regex) => [...str.matchAll(regex)].map((x) => x[1]);
const toUpperFirstLetter = (word) => word[0].charAt(0).toUpperCase() + word.slice(1);
const removeTokens = (array) => array.map((x) => {
  let out = x;
  out = x.split('-')
    .map((str) => toUpperFirstLetter(str))
    .join(' ');
  return out;
});
const regexPath = /\/([\w+-]+)|\/([\w+-]+)\//g;

function useSetTitleWithRouteName() {
  const { pathname } = useLocation();

  useEffect(() => {
    const a = pickGroups(pathname, regexPath);
    const paths = removeTokens(a);
    const [firstPath] = paths;
    document.title = firstPath;
  }, [pathname]);
}

export default useSetTitleWithRouteName;
