const Talker = require('../services/Talker');

function talkerGetAll(_req, res) {
  const talker = new Talker(null);
  talker.getAllData()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json(error));
}

module.exports = { talkerGetAll };