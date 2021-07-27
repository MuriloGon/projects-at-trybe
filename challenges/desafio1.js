db.produtos.updateMany({}, {
  $set: {
    criadoPor: "Ronald McDonald",
  },
});

db.produtos.aggregate([
  { $project: {
    _id: 0,
    nome: 1,
    criadoPor: 1,
  } },
]);
