const fs = require('fs/promises');

async function getTalkerData() {
  try {
    const rawData = await fs.readFile('../talker.json', { encoding: 'utf-8' }); 
    const data = JSON.parse(rawData);
    return data;
  } catch (error) {
    return error;
  }
}

module.exports = { getTalkerData };