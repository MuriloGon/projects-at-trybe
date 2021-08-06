const Talker = require('../services/Talker');

function talkerGetAll(_req, res) {
  Talker.getAllData()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json(error));
}

async function talkerGetById({ params: { id } }, res) {
  const talker = new Talker(id);
  try {
    const data = await talker.getById();
    if (data === null) {
      const errorMsg = { message: 'Pessoa palestrante não encontrada' };
      return res.status(404).json(errorMsg); 
    } 
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = { talkerGetAll, talkerGetById };