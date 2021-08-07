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

async function talkerPost(req, res) {
  const { name, age, talk } = req.body;
  const newTalker = await Talker.addTalker(name, age, talk);
  res.status(201).json(newTalker);
}

async function talkerPutById(req, res) {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const talker = new Talker(id);
  const newTalker = await talker.replaceById(name, age, talk);
  if (newTalker === null) {
    const message = 'id não encontrado';
    return res.status(404).json({ message });
  }
  res.status(200).json(newTalker);
}

module.exports = { 
  talkerGetAll, 
  talkerGetById,
  talkerPost,
  talkerPutById, 
};