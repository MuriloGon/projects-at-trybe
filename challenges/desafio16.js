db.produtos.find({
  ingredientes: { $size: 4 },
}).count();
