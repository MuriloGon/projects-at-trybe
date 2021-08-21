const model = require('../model/Users');

async function userEmailUniqueness(req, res, next) {
  const { email } = req.body;
  const isUnique = await model.isEmailUnique(email);
  if (!isUnique) return res.status(409).json({ message: 'Email already registered' });

  return next();  
}

module.exports = userEmailUniqueness;