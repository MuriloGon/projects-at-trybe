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

function validatePassword(req, res, next) {
  const { password } = req.body;
  if (!password) {
    const message = 'O campo "password" é obrigatório';
    return res.status(400).json({ message });
  }
  if (typeof password === 'string' && password.length < 6) {
    const message = 'O "password" deve ter pelo menos 6 caracteres';
    return res.status(400).json({ message });
  } 
    
  next();
}

module.exports = { validatePassword, validateEmail };