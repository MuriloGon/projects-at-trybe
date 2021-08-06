module.exports = (err, _req, res, _next) => {
  res.status(400).json(err);
};