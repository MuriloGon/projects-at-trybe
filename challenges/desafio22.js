db.produtos.find(
  { $expr: {
    $eq: [{ $mod: ["$vendidos", 5] }, 0],
  } },
  {
    _id: 0,
    nome: 1,
    vendidos: 1,
  },
);
