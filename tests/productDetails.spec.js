/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof (productDetails), 'function');
    // Teste que o array retornado pela função contém dois itens dentro.
    const out = productDetails('Alcool gel', 'Máscara');
    assert.deepStrictEqual(out.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof out[0], 'object')
    assert.deepStrictEqual(typeof out[1], 'object')
    assert.deepStrictEqual(typeof out[0], typeof out[1]);
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(out[0], out[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const obj1 = out[0].details.productId;
    const obj2 = out[1].details.productId;
    const str1 = obj1.substr(-3); //sugestão do lucas godoi
    const str2 = obj2.substr(-3); //sugestão do lucas godoi
    assert.deepStrictEqual(str1, str2);
    assert.notDeepStrictEqual(str1, str2.substr(-2));
  });
});
