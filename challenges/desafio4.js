db.produtos.updateMany({ nome: "Big Mac" }, { 
  $set: { 
    ultimaModificacao: new Date(), 
} });

db.produtos.find({ nome: "Big Mac", ultimaModificacao: { $exists: true } }, {
  _id: 0,
  nome: 1,
});
