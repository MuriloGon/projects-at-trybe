const pipelineDf2 = [
  { $match: {
    "imdb.rating": { $gte: 7 },
    genres: { $nin: ["Crime", "Horror"] },
    rated: { $in: ["PG", "G"] },
    languages: { $all: ["English", "Spanish"] } } },
  { $project: {
    titulo: "$title",
    avaliado: "$rated",
    notaIMDB: "$imdb.rating",
    votosIMDB: "$imdb.votes",
    ano: "$year",
    _id: 0 } },
];

db.movies.aggregate([
  ...pipelineDf2,
  { $sort: {
    ano: -1, notaIMDB: -1, titulo: 1,
  } },
]);
