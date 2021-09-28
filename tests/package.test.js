const { scripts } = require('../package.json');

describe('3 - Verifica se os scripts do package.json estão corretos', () => {
  it('Será validado que o comando `start` inicia o server com pm2 e se usa o ecosystem.', () => {
    const scriptParts = scripts.start.split(' ');
    expect(scripts).toHaveProperty('start');
    expect(scriptParts[0]).toMatch(/^pm2$|^pm2-/);
    expect(scriptParts).toContain('start');
    expect(scriptParts).toContain('ecosystem.config.yml');
  });

  it('Será validado que o comando `start:dev` inicia o server com pm2, se não usa o ecosystem e abre em watchMode.', () => {
    const scriptParts = scripts['start:dev'].split(' ');
    expect(scripts).toHaveProperty('start:dev');
    expect(scriptParts[0]).toMatch(/^pm2$|^pm2-/);
    expect(scriptParts).toContain('start');
    expect(scriptParts).not.toContain('ecosystem.config.yml');
    expect(scriptParts).toContain('--watch');
  });
});
