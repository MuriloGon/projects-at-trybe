db.trips.aggregate([
  {
    $set: { diaDaSemana: { $dayOfWeek: "$startTime" } },
  },
  {
    $match: {
      diaDaSemana: 5,
    },
  },
  {
    $group: {
      _id: { estacaoId: "$startStationId", nome: "$startStationName" },
      total: { $count: {} },
    },
  },
  {
    $project: {
      _id: 0,
      nomeEstacao: "$_id.nome",
      total: "$total",
    } },
  { $sort: { total: -1 } },
  { $limit: 1 },
]);
