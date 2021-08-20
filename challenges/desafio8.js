db.air_routes.aggregate([
  {
    $match: {
      airplane: /^747$|^380$/,
      // airplane: /747|380/, // Esse deveria ser o correto
    },
  },
  {
    $lookup: {
      from: "air_alliances",
      localField: "airline.name",
      foreignField: "airlines",
      as: "alliance",
    },
  },
  { $unwind: "$alliance" },
  { $group: {
    _id: "$alliance.name",
    totalRotas: { $sum: 1 },
  } },
  { $sort: { totalRotas: -1 } },
  { $limit: 1 },
]);
