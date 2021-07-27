db.produtos.updateMany({}, {
  $push: {
    valoresNutricionais: {
      $each: [],
      $sort: {
        percentual: -1,
      },
    },
  },
});

db.produtos.find({}, {
  _id: 0,
  nome: 1,
  valoresNutricionais: 1,
});
