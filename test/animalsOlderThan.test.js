const assert = require('assert');
const zoo = require('../src/zoo');

describe('Implemente a função animalsOlderThan', () => {
  it('Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada', () => {
    let actual = zoo.animalsOlderThan('otters', 7);
    let expected = true;
    assert.deepStrictEqual(actual, expected);

    actual = zoo.animalsOlderThan('penguins', 10);
    expected = false;
    assert.deepStrictEqual(actual, expected);
  });
});
