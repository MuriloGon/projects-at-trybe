const tokenEval = (token) => {
  const validFormat = /[0-9]/.test(token) && /[a-zA-Z]/.test(token);
  console.log(token.length);
  return !validFormat || token.length !== 16;
};

function tokenValidation(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    const message = 'Token não encontrado';
     return res.status(401).json({ message });
  }
  if (typeof authorization !== 'string') {
    const message = 'Token deve ser uma string';
    return res.status(401).json({ message });
  }
  if (tokenEval(authorization)) {
    const message = 'Token inválido';
    return res.status(401).json({ message });
  }
  next();
}

function nameValidation(req, res, next) {
  const { name } = req.body;
  if ((typeof name !== 'string') || (!name || name === '')) {
    const message = 'O campo "name" é obrigatório';
    return res.status(400).json({ message });
  }
  if (name.length < 3) {
    const message = 'O "name" deve ter pelo menos 3 caracteres';
    return res.status(400).json({ message });
  }
  next();
}

function ageValidation(req, res, next) {
  const { age } = req.body;
  if (typeof age !== 'number' || !age) {
    const message = 'O campo "age" é obrigatório';
    return res.status(400).json({ message });
  }
  if (age < 18) {
    const message = 'A pessoa palestrante deve ser maior de idade';
    return res.status(400).json({ message });
  }
  next();
}

// eslint-disable-next-line complexity
function talkValidation(req, res, next) {
  const { talk } = req.body;
  if (!talk || !talk.watchedAt || !talk.rate || talk.watchedAt === '' || talk.rate === '') {
    const message = 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios';
    return res.status(400).json({ message });
  }

  const dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!dateFormat.test(talk.watchedAt)) {
    const message = 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"';
    return res.status(400).json({ message });
  }

  if (typeof talk.rate !== 'number' || ![1, 2, 3, 4, 5].includes(talk.rate)) {
    const message = 'O campo "rate" deve ser um inteiro de 1 à 5';
    return res.status(400).json({ message });
  }
  next();
}

module.exports = [tokenValidation, nameValidation, ageValidation, talkValidation];