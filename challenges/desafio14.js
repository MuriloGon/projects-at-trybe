db.trips.aggregate([
  // {
  //   $match: {
  //     startTime: { $gte: ISODate("2016-03-10"), $lt: ISODate("2016-04-10") },
  //   },
  // },
  {
    $set: {
      duration: {
        $divide: [{ $subtract: ["$stopTime", "$startTime"] }, 6e4],
      },
    },
  },
  {
    $group: {
      _id: "$bikeid",
      duracaoMedia: { $avg: "$duration" },
    },
  },
  {
    $project: {
      _id: 0,
      bikeId: "$_id",
      duracaoMedia: { $ceil: "$duracaoMedia" },
    },
  },
  { $sort: { duracaoMedia: -1 } },
  { $limit: 5 },
]);
