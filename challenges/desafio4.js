// 4 - Retorne a quantidade de voos da empresa GOL.
db.voos.find({ "empresa.nome": /^gol$/i }).count();
