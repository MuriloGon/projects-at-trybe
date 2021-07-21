// 27 - Retorne a quantidade total de voos de natureza Doméstica que a empresa PASSAREDO possui, via uso de uma nova coleção chamada resumoVoos.
const totalVoosDomesticos = db.voos.find({
  natureza: "Doméstica",
  "empresa.nome": "PASSAREDO",
}).count();

db.resumoVoos.insert({
  empresa: "PASSAREDO",
  totalVoosDomesticos,
});

db.resumoVoos.find({}, { _id: 0 }).limit(1);