import { useEffect, useState } from 'react';

const usePageTitle = (initialTitle: string): [string, (arg: string)=>void] => {
  const [title, changeTitle] = useState(initialTitle);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return [title, changeTitle];
};

export default usePageTitle;
