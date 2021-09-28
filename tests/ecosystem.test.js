const fs = require('fs');
const yml = require('js-yaml');

describe('2 - Verifica a configuração do ecosystem.config.yml', () => {
  const ecosystem = yml.safeLoad(fs.readFileSync('ecosystem.config.yml', 'utf8'));
  const config = ecosystem.apps[0];

  it('Será validado que o ecosystem tem a propriedade name', () => {
    expect(config).toHaveProperty('name');
  });

  it('Será validado se o script a ser executado é o index.js', () => {
    expect(config).toHaveProperty('script');
    expect(config.script).toEqual('./index.js');
  });

  it('Será validado que o modo de execução está configurado para cluster', () => {
    expect(config).toHaveProperty('exec_mode');
    expect(config.exec_mode).toEqual('cluster');
  });

  it('Será validado que o número de instâncias está definido como 2.', () => {
    expect(config).toHaveProperty('instances');
    expect(config.instances).toEqual(2);
  });

  it('Será validado que o modo watch está configurado para estar desativado.', () => {
    expect(config.watch).not.toBeTruthy();
  });

  it('Será validado que a reiniciação de memória máxima esta configurada como 200M', () => {
    expect(config).toHaveProperty('max_memory_restart');
    expect(config.max_memory_restart).toEqual('200M');
  });
});
