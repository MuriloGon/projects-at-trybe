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

  async replaceById(name, age, talk) {
    const { id } = this;
    const data = await Talker.getAllData();
    const indexTarget = data.findIndex((item) => Number(item.id) === Number(id));
    if (indexTarget < 0) return null;
    data[indexTarget].name = name;
    data[indexTarget].age = age;
    data[indexTarget].talk = talk;
    await fs.writeFile('./talker.json', JSON.stringify(data), 'utf-8');
    return data[indexTarget];
  }

  async deleteById() {
    const { id } = this;
    const data = await Talker.getAllData();
    const indexTarget = data.findIndex((item) => Number(item.id) === Number(id));
    if (indexTarget < 0) return -1;
    delete data[indexTarget];
    await fs.writeFile('./talker.json', JSON.stringify(data), 'utf-8');
    return 1; 
  }

  static async getByQuery(query) {
    const data = await Talker.getAllData();
    const reg = new RegExp(query, 'i');
    const output = data.filter((item) => reg.test(item.name));
    return output;
  }
}

module.exports = Talker;