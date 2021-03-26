/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const createMenu = require('../src/restaurant');

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  meuRestaurante.order('coxinha') // Retorno: undefined

  meuRestaurante.consumption // Retorno: ['coxinha']

  meuRestaurante.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A ORDEM INDICADA!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    // assert.fail();
    // TESTE 1: Verifique se o retorno da função createMenu() é um objeto que possui,
    // mas não é necessariamente é limitado à chave `fetchMenu`, a qual tem como valor uma função.
    // ```
    // const objetoRetornado = createMenu(); // Retorno: { fetchMenu: () => {}, ... }
    // ```
    const objetoRetornado1 = createMenu();
    assert.strictEqual(Object.keys(objetoRetornado1).includes('fetchMenu'), true);

    // TESTE 2: Verifique que, dado que a função createMenu foi chamada com o objeto: `{ food: {}, drink: {} }`,
    // verifique que 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`.
    // ```
    // const objetoRetornado = createMenu({ food: {}, drink: {} });
    // objetoRetornado.fetchMenu() // Retorno: { food: {}, drink: {}}
    // ```
    const objetoRetornado2 = createMenu({ food: {}, drink: {} });
    const keyTst2 = Object.keys(objetoRetornado2.fetchMenu());
    assert.strictEqual(keyTst2.includes('food') && keyTst2.includes('drink'), true);

    // TESTE 3: Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.fetchMenu() // Retorno: objetoQualquer
    // ```
    const objCriado3 = { food: {}, drink: {} };
    const objetoRetornado3 = createMenu(objCriado3);
    const keyTst3 = objetoRetornado3.fetchMenu();
    assert.strictEqual(objCriado3 === keyTst3, true);

    // Implementação 4: Agora faça o PASSO 1 no arquivo `src/restaurant.js`.

    // --------------------------------------------------------------------------------------
    // TESTE 5: Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.consumption // Retorno: []
    // ```
    const objetoRetornado5 = createMenu();
    assert.deepStrictEqual(objetoRetornado3.consumption.length, 0);
    // Implementação 6: Agora faça o PASSO 2 no arquivo `src/restaurant.js`.

    // --------------------------------------------------------------------------------------
    // TESTE 5: Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro,
    // como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.order("coxinha");
    // objetoRetornado.consumption // Retorno: ["coxinha"]
    // ```
    const objetoRetornado7 = createMenu();
    objetoRetornado7.order('coxinha');
    const tst7 = objetoRetornado7.consumption.includes('coxinha');
    assert.deepStrictEqual(tst7, true);

    // Implementação 8: Agora faça o PASSO 3 no arquivo `src/restaurant.js`.

    // --------------------------------------------------------------------------------------
    // TESTE 9: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
    // ```
    // objetoRetornado.order("coxinha");
    // objetoRetornado.order("agua");
    // objetoRetornado.order("sopa");
    // objetoRetornado.order("sashimi");
    // objetoRetornado.consumption // Retorno: ["coxinha", "agua", "sopa", "sashimi"]
    // ```
    const objetoRetornado9 = createMenu();
    objetoRetornado9.order('coxinha');
    objetoRetornado9.order('agua');
    objetoRetornado9.order('sopa');
    objetoRetornado9.order('sashimi');
    assert.deepStrictEqual(objetoRetornado9.consumption, ['coxinha', 'agua', 'sopa', 'sashimi']);
    // Implementação 10: Agora faça o TESTE 7 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 11: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    // ```
    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.comsuption // Retorno: ['coxinha', 'agua', 'coxinha']
    // ```
    const objetoRetornado10 = createMenu();
    objetoRetornado10.order('coxinha');
    objetoRetornado10.order('agua');
    objetoRetornado10.order('coxinha');
    assert.deepStrictEqual(objetoRetornado10.consumption, ['coxinha', 'agua', 'coxinha']);
    // TESTE 12: Agora faça o TESTE 8 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 13: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    // ```
    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.pay() // Retorno: somaDosPreçosDosPedidos
    // ```
    const objetoRetornado11 = createMenu({ food: { coxinha: 5 }, drink: { agua: 3 } });
    objetoRetornado11.order('coxinha');
    objetoRetornado11.order('agua');
    objetoRetornado11.order('coxinha');
    assert.deepStrictEqual(objetoRetornado11.pay(), 14.3);

    // TESTE 14: Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
});
