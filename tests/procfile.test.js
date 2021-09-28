const fs = require('fs');

describe('5 - Verifica a configuração do arquivo Procfile', () => {
  const [type, script] = fs.readFileSync('Procfile', 'utf8').split(':');

  it('Será validado que o dyno é do tipo web.', () => {
    expect(type).toEqual('web');
  });

  it('Será validado que o script inicia o server com pm2 e se usa o ecosystem.', () => {
    const scriptParts = script.trim().split(' ');
    expect(scriptParts[0]).toMatch(/^pm2$|^pm2-/);
    expect(scriptParts).toContain('start');
    expect(scriptParts).toContain('ecosystem.config.yml');
  });
});
