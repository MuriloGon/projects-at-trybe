// Desafio 10
function techList(techArr, nameStr) {
  let outputObj = [];

  if (techArr.length <= 0) return null;

  for (let techItem of techArr.sort()) {
    outputObj.push(
      {
        tech: techItem,
        name: nameStr,
      },
    );
  }
  return outputObj;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
