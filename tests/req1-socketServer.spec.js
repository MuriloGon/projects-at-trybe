const io = require('socket.io-client');

const BASE_URL = 'http://localhost:3000/';

describe('1 - Crie um back-end para conexão simultânea de clientes e troca de mensagens em chat público', () => {
  const chatMessage = 'We can only see a short distance ahead, but we can see plenty there that needs to be done.';
  const nickname = 'Alan Turing';

  let client1;
  let client2;
  let client3;

  afterEach(async (done) => {
    client1.disconnect();
    client2.disconnect();
    client3.disconnect();
    done();
  });

  it('Será validado que todos os clientes que estão conectados ao chat recebem as mensagens enviadas', async (done) => {
    client1 = io.connect(BASE_URL, { reconnection: false });
    client2 = io.connect(BASE_URL, { reconnection: false });
    client3 = io.connect(BASE_URL, { reconnection: false });

    client1.emit('message', { chatMessage, nickname });

    client1.on('message', (message) => {
      expect(message.includes(chatMessage)).toBeTruthy();
      expect.assertions(1);
    });

    client2.on('message', (message) => {
      expect(message.includes(chatMessage)).toBeTruthy();
      expect.assertions(2);
    });

    client3.on('message', (message) => {
      expect(message.includes(chatMessage)).toBeTruthy();
      expect.assertions(3);
      done();
    });
  });

  it('Será validado que toda mensagem que um cliente recebe contém as informações acerca de quem a enviou, data-hora do envio e o conteúdo da mensagem em si', async (done) => {
    const dateRegex = /\d{1,2}-\d{1,2}-\d{4}/gm;
    const timeRegex = /\d{1,2}:\d{1,2}(:\d{0,2})?/gm;

    client1 = io.connect(BASE_URL, { reconnection: false });
    client2 = io.connect(BASE_URL, { reconnection: false });

    client1.emit('message', { chatMessage, nickname });

    client1.on('message', (message) => {
      expect(message.includes(chatMessage)).toBeTruthy();
      expect(message.includes(nickname)).toBeTruthy();
      expect(message).toMatch(dateRegex);
      expect(message).toMatch(timeRegex);
    });
    client2.on('message', (message) => {
      expect(message.includes(chatMessage)).toBeTruthy();
      expect(message.includes(nickname)).toBeTruthy();
      expect(message).toMatch(dateRegex);
      expect(message).toMatch(timeRegex);
      done();
    });
  });
});
