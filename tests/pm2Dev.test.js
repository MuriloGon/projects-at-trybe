const { dependencies } = require('../package.json');

describe('4 - Verifica se o módulo pm2 foi instalado no projeto', () => {
  it('Será validado que o modulo pm2 está instalado nas dependências', () => {
    expect(dependencies).toHaveProperty('pm2');
  });
});
