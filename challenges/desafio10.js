db.trips.aggregate([
  {
    $set: {
      duration: {
        $divide: [{ $subtract: ["$stopTime", "$startTime"] }, 3.6e6],
      },
    },
  },
  {
    $group: {
      _id: "$usertype",
      duracaoMedia: { $avg: "$duration" },
    },
  },
  {
    $project: {
      _id: 0,
      tipo: "$_id",
      duracaoMedia: { $round: ["$duracaoMedia", 2] },
    },
  },
  {
    $sort: { duracaoMedia: 1 },
  },
]);
