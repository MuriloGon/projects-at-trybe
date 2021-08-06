const fs = require('fs/promises');

class Talker {
  constructor(id) {
    this.id = id;
  }

  async getAllData() {
    try {
      const rawData = await fs.readFile('./talker.json', { encoding: 'utf-8' }); 
      const data = JSON.parse(rawData);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Talker;