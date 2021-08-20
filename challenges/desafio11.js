db.trips.aggregate([
  { $project: { _id: false, startTime: true } },
  {
    $set: { diaDaSemana: { $dayOfWeek: "$startTime" } },
  },
  {
    $group: {
      _id: "$diaDaSemana",
      total: { $sum: 1 },
    },
  },
  {
    $project: {
      diaDaSemana: "$_id",
      _id: 0,
      total: "$total",
    },
  },
  { $sort: { total: -1 } },
  { $limit: 1 },
]);
