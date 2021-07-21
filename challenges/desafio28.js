// 28 - Retorne a quantidade total de voos de natureza Doméstica que a empresa LATAM AIRLINES BRASIL possui, via uso de uma nova coleção chamada resumoVoos.
const totalVoosDomesticos = db.voos.find({
  natureza: "Doméstica",
  "empresa.nome": "LATAM AIRLINES BRASIL",
}).count();

db.resumoVoos.insert({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos,
});

db.resumoVoos.find({}, { _id: 0 }).limit(1);