/**
 * Mapeamento de um objeto com as opções e seus valores esperados.
 * @param {object} alternatives - Objeto que representa o mapeamento esperado
 * @returns {func} Função mapeada a espera de chave específica
 * @example
 *   const alternatives = {
 *     value1: <Component1 />,
 *     value2: <Component2 />,
 *   };
 *   const hof = choseOption(alternatives);
 *   hof('value1') => <Component1 />
 */
function chooseOption(alternatives) {
  return (alternative) => alternatives[alternative];
}

export default chooseOption;
