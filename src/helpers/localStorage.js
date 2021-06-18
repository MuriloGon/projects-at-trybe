export const userInfo = [
  {
    name: 'João',
    score: '29',
    picture: 'https://www.gravatar.com/avatar/teste1',
    assertions: 10,
  },
  {
    name: 'Luiz',
    score: '50',
    picture: 'https://www.gravatar.com/avatar/teste2',
    assertions: 11,
  },
  {
    name: 'Maria',
    score: '100',
    picture: 'https://www.gravatar.com/avatar/teste3',
    assertions: 8,
  },
  {
    name: 'jurandir',
    score: '9',
    picture: 'https://www.gravatar.com/avatar/teste4',
    assertions: 12,
  },
  {
    name: 'jurandir2',
    score: '10',
    picture: 'https://www.gravatar.com/avatar/teste5',
    assertions: 5,
  },
  {
    name: 'jurandir3',
    score: '11',
    picture: 'https://www.gravatar.com/avatar/teste6',
    assertions: 9,
  },
];

export function setLocalStorage(key, data) {
  localStorage.setItem(`${key}`, JSON.stringify(data));
}

export function getLocalStorage(data) {
  return (
    JSON.parse(localStorage.getItem(data))
  );
}
