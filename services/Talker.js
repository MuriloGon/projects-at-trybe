const fs = require('fs/promises');

class Talker {
  constructor(id) {
    this.id = id;
  }

  async getAllData() {
    const rawData = await fs.readFile('./talker.json', { encoding: 'utf-8' }); 
    const data = JSON.parse(rawData);
    return data;
  }
}

module.exports = Talker;