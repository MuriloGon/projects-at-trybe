/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

// req01
function animalsByIds(...ids) {
  const { animals } = data;
  return animals.filter(({ id }) => ids.includes(id));
}

// req02
function animalsOlderThan(animalsName, animalsAge) {
  const { animals } = data;
  return animals
    .find(({ name }) => name === animalsName)
    .residents
    .every(({ age }) => age >= animalsAge);
}

// req03
function employeeByName(employeeName) {
  if (!employeeName) return {};

  const { employees } = data;
  return employees.find(
    ({ firstName, lastName }) => [firstName, lastName].includes(employeeName),
  );
}

// req04
function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

// req05
function isManager(id) {
  const { employees } = data;
  return employees.some(({ managers }) => managers.includes(id));
}

// req06
function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const employeeAdded = {
    id,
    firstName,
    lastName,
    managers: managers || [],
    responsibleFor: responsibleFor || [],
  };
  const { employees } = data;
  employees.push(employeeAdded);
}

// req07
function animalCount(...species) {
  const { animals } = data;
  if (species.length === 0) {
    return animals.reduce(
      (acc, { name, residents }) => {
        acc[name] = residents.length;
        return acc;
      },
      {},
    );
  }
  return animals
    .filter(({ name }) => species.includes(name))
    .reduce((acc, { residents }) => acc + residents.length, 0);
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
