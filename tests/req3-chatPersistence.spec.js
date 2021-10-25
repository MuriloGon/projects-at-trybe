/**
 * @jest-environment node
 */
const cheerio = require('cheerio');
const axios = require('axios');
require('dotenv').config();
const io = require('socket.io-client');
const faker = require('faker');
const puppeteer = require('puppeteer');
const { MongoClient } = require('mongodb');
const _ = require('lodash');

const BASE_URL = 'http://localhost:3000/';

function wait(time) {
  const start = Date.now();
  while (true) {
    if (Date.now() - start >= time) {
      return true;
    }
  }
}

function dataTestid(name) {
  return `[data-testid=${name}]`;
}

const chatMessage = 'The more I study, the more insatiable do I feel my genius for it to be.';
const anotherChatMessage = 'Your best and wisest refuge from all troubles is in your science.';
const yetAnotherChatMessage = 'The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.';
const nickname = 'Ada Lovelace';

describe('3 - Elabore o histórico do chat para que as mensagens persistam', () => {
  let browser;
  let page;
  let connection;
  let db;
  let client1;
  let client2;

  beforeEach(async (done) => {
    client1 = io.connect(BASE_URL, { reconnection: false });
    client2 = io.connect(BASE_URL, { reconnection: false });
    connection = await MongoClient.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db(process.env.DB_NAME);
    browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--window-size=1920,1080'], headless: true });
    await db.collection('messages').deleteMany({});
    page = await browser.newPage();
    done();
  });

  afterEach(async (done) => {
    await browser.close();
    client1.disconnect();
    client2.disconnect();
    await db.collection('messages').deleteMany({});
    await connection.close();
    done();
  });

  it('Será validado que todo o histórico de mensagens irá aparecer quando o cliente se conectar', async () => {
    const firstMessageToSend = { chatMessage: chatMessage, nickname: nickname };
    const secondMessageToSend = { chatMessage: anotherChatMessage, nickname: nickname };
    const thirdMessageToSend = { chatMessage: yetAnotherChatMessage, nickname: nickname };

    // sends lots of messages
    client1.emit('message', firstMessageToSend);
    //typing...
    wait(500)
    client1.emit('message', secondMessageToSend);
    //typing...
    wait(500)
    client1.emit('message', thirdMessageToSend);

    // connects via front-end
    await page.goto(BASE_URL);
    await page.waitForSelector('[data-testid=message]');
    await page.waitForTimeout(1000);

    // peek the messages we sent
    const messages = await page.$$eval(dataTestid('message'), (nodes) => nodes.map((n) => n.innerText));
    expect(messages.length).toEqual(3);

    expect(messages).toEqual(
      expect.arrayContaining([
        expect.stringMatching(chatMessage),
        expect.stringMatching(anotherChatMessage),
        expect.stringMatching(yetAnotherChatMessage),
      ])
    );

    const result = await db.collection('messages').find({}).toArray();
    const messagesDB = result.map(({ message }) => (message));
    expect(messagesDB.length).toEqual(3);

    expect(messages).toEqual(
      expect.arrayContaining([
        expect.stringMatching(chatMessage),
        expect.stringMatching(anotherChatMessage),
        expect.stringMatching(yetAnotherChatMessage),
      ])
    );
  });

  it('Será validado que ao enviar uma mensagem e recarregar a página, a mensagem persistirá', async () => {
    await page.goto(BASE_URL);

    let messageBox = await page.$(`input${dataTestid('message-box')}`);
    let sendButton = await page.$(`button${dataTestid('send-button')}`);

    //send one message
    await messageBox.type(chatMessage);
    await sendButton.click();
    await page.waitForSelector(dataTestid('message'));

    //send another message
    await messageBox.type(anotherChatMessage);
    await sendButton.click();
    await page.waitForSelector(dataTestid('message'));

    //another client sends a message
    const messageToSend = { chatMessage: yetAnotherChatMessage, nickname: nickname };
    //typing...
    wait(500)
    client1.emit('message', messageToSend);

    //take a breath until front-end receives the messages
    await page.waitForTimeout(1000);

    //check the messages are displayed
    let messages = await page.$$eval(dataTestid('message'), (nodes) => nodes.map((n) => n.innerText));

    expect(messages).toEqual(
      expect.arrayContaining([
        expect.stringMatching(chatMessage),
        expect.stringMatching(anotherChatMessage),
        expect.stringMatching(yetAnotherChatMessage),
      ])
    )

    // reload page
    await page.reload();
    await page.waitForSelector(dataTestid('message'));
    await page.waitForTimeout(1000);

    //check the messages are still displayed
    messages = await page.$$eval(dataTestid('message'), (nodes) => nodes.map((n) => n.innerText));

    expect(messages).toEqual(
      expect.arrayContaining([
        expect.stringMatching(chatMessage),
        expect.stringMatching(anotherChatMessage),
        expect.stringMatching(yetAnotherChatMessage),
      ])
    )

    //sends another message after reloading
    const newMessage = 'the quick brown fox jumps over the lazy dog'
    messageBox = await page.$(`input${dataTestid('message-box')}`);
    sendButton = await page.$(`button${dataTestid('send-button')}`);
    await messageBox.type(newMessage);
    await sendButton.click();
    await page.waitForTimeout(500);

    messages = await page.$$eval(dataTestid('message'), (nodes) => nodes.map((n) => n.innerText));
    latestMessage = _.last(messages);
    expect(latestMessage).toMatch(newMessage);

    const result = await db.collection('messages').find({}).toArray();
    const messagesDB = result.map(({ message }) => (message));
    expect(messagesDB.length).toEqual(4);

    expect(messages).toEqual(
      expect.arrayContaining([
        expect.stringMatching(chatMessage),
        expect.stringMatching(anotherChatMessage),
        expect.stringMatching(yetAnotherChatMessage),
        expect.stringMatching(newMessage),
      ])
    );
  });

  it('Será validado que ao alterar o nickname e enviar uma mensagem, a mensagem persistirá', async () => {
    await page.goto(BASE_URL);

    const messageBox = await page.$(`input${dataTestid('message-box')}`);
    const sendButton = await page.$(`button${dataTestid('send-button')}`);

    //send one message
    await messageBox.type(chatMessage);
    await sendButton.click();
    await page.waitForSelector(dataTestid('message'));

    // it gets displayed correctly
    let messages = await page.$$eval(dataTestid('message'), (nodes) => nodes.map((n) => n.innerText));
    expect(messages.length).toBeGreaterThanOrEqual(1);
    let latestMessage = _.last(messages);
    expect(latestMessage).toMatch(chatMessage);


    //changes nickname
    const nicknameBox = await page.$('[data-testid=nickname-box]');
    const nicknameButton = await page.$(`button${dataTestid('nickname-button')}`);
    await nicknameBox.type(nickname);
    await nicknameButton.click();
    await page.waitForTimeout(1000);


    //send another message
    await messageBox.type(anotherChatMessage);
    await sendButton.click();
    await page.waitForTimeout(1000);


    // it gets displayed correctly with new nickname
    messages = await page.$$eval(dataTestid('message'), (nodes) => nodes.map((n) => n.innerText));
    expect(messages).toEqual(
      expect.arrayContaining([
        expect.stringMatching(anotherChatMessage),
        expect.stringMatching(nickname),
      ])
    )

    // new clients that connects sees the messages with new nickname
    const page2 = await browser.newPage();
    await page2.setCacheEnabled(false);
    await page2.goto(BASE_URL);
    await page2.waitForTimeout(1000);

    messages = await page2.$$eval(dataTestid('message'), (nodes) => nodes.map((n) => n.innerText));
    expect(messages).toEqual(
      expect.arrayContaining([
        expect.stringMatching(chatMessage),
        expect.stringMatching(anotherChatMessage),
        expect.stringMatching(nickname),
      ])
    );

    const result = await db.collection('messages').find({}).toArray();
    const messagesDB = result.map(({ message }) => (message));
    expect(messagesDB.length).toEqual(2);

    expect(messages).toEqual(
      expect.arrayContaining([
        expect.stringMatching(chatMessage),
        expect.stringMatching(anotherChatMessage),
      ])
    );
  });
});
