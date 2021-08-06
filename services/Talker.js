const fs = require('fs/promises');

class Talker {
  constructor(id) {
    this.id = id;
  }

  static async getAllData() {
    const rawData = await fs.readFile('./talker.json', { encoding: 'utf-8' }); 
    const data = JSON.parse(rawData);
    return data;
  }

  async getById() {
    const data = await Talker.getAllData();
    const out = data.find((item) => Number(item.id) === Number(this.id)) || null;
    return out;
  }
}

module.exports = Talker;