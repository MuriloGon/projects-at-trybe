let answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

answerPhone = jest.fn((test) =>
  (test
    ? Promise.resolve('Oi!')
    : Promise.reject(new Error('Infelizmente não podemos atender...'))));

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    expect.assertions(3);

    const response = await answerPhone(true);

    expect(answerPhone).toBeDefined();
    expect(answerPhone).toBeCalledTimes(1);
    expect(response).toMatch('Oi');
  });
  test('ocupado', async () => {
    expect.assertions(2);
    try {
      await answerPhone(false);
    } catch (error) {
      expect(error).toEqual(Error('Infelizmente não podemos atender...'));
      expect(answerPhone).toBeCalledTimes(2);
    }
  });
});
