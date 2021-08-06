const { validate } = require('email-validator');

function validateEmail(req, res, next) {
  const { email } = req.body;
  if (!email) {
    const message = 'O campo "email" é obrigatório';
    return res.status(400).json({ message });
  }
  if (!validate(email)) {
    const message = 'O "email" deve ter o formato "email@email.com"';
    return res.status(400).json({ message });
  }

  next();
}

module.exports = validateEmail;