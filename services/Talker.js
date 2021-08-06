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

  static async addTalker(name, age, talk) {
    const data = await Talker.getAllData();

    const lastId = data.length > 0 
    ? Number(data[data.length - 1].id)
    : 0;
    const out = { id: lastId + 1, name, age, talk };
    data.push(out);

    const stringData = JSON.stringify(data);
    await fs.writeFile('./talker.json', stringData, 'utf-8');
    return out;
  }
}

module.exports = Talker;