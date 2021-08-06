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

module.exports = validatePassword;