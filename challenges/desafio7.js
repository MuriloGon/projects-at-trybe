db.movies.aggregate([
  { $match: { languages: "English" } },
  { $unwind: "$cast" },
  {
    $group: {
      _id: "$cast",
      numeroFilmes: { $count: {} },
      mediaIMDB: { $avg: "$imdb.rating" },
    },
  },
  { $set: { mediaIMDB: { $round: ["$mediaIMDB", 1] } } },
  {
    $sort: {
      numeroFilmes: -1,
      _id: -1,
    },
  },
]);
