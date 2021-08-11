// 9 - Retorne a quantidade de voos entre os anos de 2017 e 2018.
db.voos.find({
  ano: {
    $gte: 2017,
    $lte: 2018,
  },
}).count();