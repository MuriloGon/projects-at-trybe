const actors = [
  "Sandra Bullock",
  "Tom Hanks",
  "Julia Roberts",
  "Kevin Spacey",
  "George Clooney",
];

db.movies.aggregate([
  {
    $match: {
      countries: "USA",
      "tomatoes.viewer.rating": { $gte: 3 },
      cast: { $exists: true },
    },
  },
  {
    $set: {
      num_favs: { $size: { $setIntersection: [actors, "$cast"] } },
    },
  },
  {
    $sort: { num_favs: -1, "tomatoes.viewer.rating": -1, title: -1 },
  },
  {
    $project: {
      title: 1,
      // num_favs: 1,
      // "tomatoes.viewer.rating": 1,
      _id: 0,
    },
  },
  { $skip: 24 },
  { $limit: 1 },
]);
