const assert = require('assert');
const zoo = require('../src/zoo');

describe('Implemente a função schedule', () => {
  it('Sem parâmetros, retorna um cronograma legível para humanos', () => {
    const actual = zoo.schedule();
    const expected = {
      'Tuesday': 'Open from 8am until 6pm',
      'Wednesday': 'Open from 8am until 6pm',
      'Thursday': 'Open from 10am until 8pm',
      'Friday': 'Open from 10am until 8pm',
      'Saturday': 'Open from 8am until 10pm',
      'Sunday': 'Open from 8am until 8pm',
      'Monday': 'CLOSED'
    };

    assert.deepStrictEqual(actual, expected);
  })

  it('Se um único dia for passado, retorna somente este dia em um formato legível para humanos', () => {
    let actual = zoo.schedule('Monday');
    let expected = {
      'Monday': 'CLOSED'
    };
    assert.deepStrictEqual(actual, expected);

    actual = zoo.schedule('Tuesday');
    expected = {
      'Tuesday': 'Open from 8am until 6pm'
    };
    assert.deepStrictEqual(actual, expected);
  });
});
