const schema = require('../schemas/usersValidations');

function validateAuthData(req, res, next) {
  const { email, password } = req.body;
  const validation = schema.validateAuthUserData(email, password);
  if (!validation) {
    const message = 'All fields must be filled';
    return res.status(401).json({ message });
  }
  return next();
}

module.exports = validateAuthData;