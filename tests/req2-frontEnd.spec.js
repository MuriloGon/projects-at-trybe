require('dotenv').config();

const puppeteer = require('puppeteer');
const _ = require('lodash');

const BASE_URL = 'http://localhost:3000/';

function dataTestid(name) {
  return `[data-testid=${name}]`;
}

const chatMessage = 'The more I study, the more insatiable do I feel my genius for it to be.';
const anotherChatMessage = 'Your best and wisest refuge from all troubles is in your science.';
const yetAnotherChatMessage = 'The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.';
const nickname = 'Ada Lovelace';

describe('2 - Crie um frontend para que as pessoas interajam com o chat', () => {
  let browser;
  let page;

  beforeEach(async (done) => {
    browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--window-size=1920,1080'], headless: true });
    page = await browser.newPage();
    await page.goto(BASE_URL);
    done();
  });

  afterEach(async (done) => {
    await browser.close();
    done();
  });

  it('Será validado que um nickname aleatório é gerado quando o cliente se conecta', async () => {
    await page.waitForSelector(dataTestid('online-user'));

    const givenNickname = await page.$$eval(dataTestid('online-user'), (nodes) => nodes.map((n) => n.innerText));

    expect(givenNickname[0]).toMatch(/^[\w'-]{16}$/);
  });


  it('Será validado que o front-end tem uma caixa de texto para preencher e um botão para enviar mensagens', async () => {
    const messageBox = await page.$(`input${dataTestid('message-box')}`);
    const sendButton = await page.$(`button${dataTestid('send-button')}`);

    expect(messageBox).not.toBeNull();
    expect(sendButton).not.toBeNull();
  });

  it('Será validado que as mensagens enviadas possuem o data-test-id correto', async () => {
    const messageBox = await page.$(`input${dataTestid('message-box')}`);
    const sendButton = await page.$(`button${dataTestid('send-button')}`);

    //send one message
    await messageBox.type(chatMessage);
    await sendButton.click();
    await page.waitForSelector(dataTestid('message'));

    //send another message
    await messageBox.type(anotherChatMessage);
    await sendButton.click();
    await page.waitForTimeout(500);

    const messagesSent = (await page.$$(dataTestid('message'))).length;

    expect(messagesSent).toBeGreaterThanOrEqual(2);
  });

  it('Será validado que as mensagens são exibidas na ordem correta', async () => {
    const messageBox = await page.$(`input${dataTestid('message-box')}`);
    const sendButton = await page.$(`button${dataTestid('send-button')}`);

    //send one message
    await messageBox.type(chatMessage);
    await sendButton.click();
    await page.waitForSelector(dataTestid('message'));

    //send another message
    await messageBox.type(anotherChatMessage);
    await sendButton.click();
    await page.waitForTimeout(500);

    //send yet another message
    await messageBox.type(yetAnotherChatMessage);
    await sendButton.click();
    await page.waitForTimeout(500);

    // peek the messages we sent
    const messages = await page.$$eval(dataTestid('message'), (nodes) => nodes.map((n) => n.innerText));
    const latestMessages = _.takeRight(messages, 3);


    expect(latestMessages[0]).toMatch(chatMessage);
    expect(latestMessages[1]).toMatch(anotherChatMessage);
    expect(latestMessages[2]).toMatch(yetAnotherChatMessage);
  });

  it('Será validado que o front-end tem um campo de texto para preencher e um botão para alterar o apelido (nickname)', async () => {
    const nicknameBox = await page.$(`input${dataTestid('nickname-box')}`);
    const nicknameButton = await page.$(`button${dataTestid('nickname-button')}`);

    expect(nicknameBox).not.toBeNull();
    expect(nicknameButton).not.toBeNull();
  });

  it('Será validado que é possível enviar mensagens após alterar o nickname', async () => {

    //Client changes nickname
    const nicknameBox = await page.$(`input${dataTestid('nickname-box')}`);
    await nicknameBox.type(nickname);

    const nicknameButton = await page.$(`button${dataTestid('nickname-button')}`);
    await nicknameButton.click();
    await page.waitForTimeout(500);

    //Client sends a message
    const messageBox = await page.$(`input${dataTestid('message-box')}`);
    await messageBox.type(chatMessage);
    const sendButton = await page.$(`button${dataTestid('send-button')}`);
    await sendButton.click();
    await page.waitForTimeout(500);

    //Message comes with new nickname
    const messages = await page.$$eval(dataTestid('message'), (nodes) => nodes.map((n) => n.innerText));

    expect(messages).toEqual(
      expect.arrayContaining([
        expect.stringMatching(chatMessage),
        expect.stringMatching(nickname),
      ])
    )

    //another client gets in
    const page2 = await browser.newPage();
    await page2.setCacheEnabled(false);
    await page2.goto(BASE_URL);

    //former client sends a message
    await page.bringToFront();
    await messageBox.type(anotherChatMessage);
    await sendButton.click();
    await page.waitForTimeout(500);

    //the latter client receives the message with new nickname
    await page2.bringToFront();
    await page2.waitForTimeout(500);
    const formerClientMessages = await page.$$eval(dataTestid('message'), (nodes) => nodes.map((n) => n.innerText));
    expect(formerClientMessages).toEqual(
      expect.arrayContaining([
        expect.stringMatching(anotherChatMessage),
        expect.stringMatching(nickname),
      ])
    )
  });
});
