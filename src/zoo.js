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

// req08
function entryCalculator(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const { prices } = data;
  return Object
    .entries(entrants)
    .map(([key, value]) => value * prices[key])
    .reduce((acc, cValue) => acc + cValue);
}

// req 09
const noOptions = (animals) => {
  const locations = [...new Set((animals.map(({ location }) => location)))];
  const genericObj = locations.reduce((acc, location) => {
    acc[location] = [];
    return acc;
  }, {});
  const noParms = { ...genericObj };
  animals.forEach(({ name, location }) => noParms[location].push(name));
  return noParms;
};

function animalMap(options) {
  const { animals } = data;
  if (!options) return noOptions(animals, options);
  const hasIncludeNames = Object.keys(options).includes('includeNames') && options.includeNames;
  const isOrdered = Object.keys(options).includes('sorted') && options.sorted;
  const sex = options.sex ? options.sex : null;
  const filterAnimalsByLocation = (loc) => animals.filter(({ location }) => location === loc);
  let includeNames = {};
  if (hasIncludeNames) {
    const locations = [...new Set((animals.map(({ location }) => location)))];
    locations.forEach((loc) => {
      const value = filterAnimalsByLocation(loc)
        .map((x) => ({ [x.name]: x.residents.map((x) => x.name) }));
      includeNames = { ...includeNames, ...{ [loc]: value } };
    });
  } else return noOptions(animals);
  if (sex !== null && hasIncludeNames) {
    const keys = Object.keys(includeNames);
    keys.forEach((key) => {
      includeNames[key].forEach((obj) => {
        const animalKey = Object.keys(obj)[0];
        const out = animals.filter(({ name }) => name === animalKey).map((x) => x.residents)[0];
        const out2 = out.filter((x) => x.sex === sex);
        const out3 = out2.map((x) => x.name);
        obj[animalKey] = out3;
      });
    });
  }
  if (isOrdered && hasIncludeNames) {
    const keys = Object.keys(includeNames);
    keys.forEach((key) => {
      includeNames[key].forEach((obj) => {
        const objKeys = Object.keys(obj);
        objKeys.forEach((objKey) => {
          obj[objKey] = obj[objKey].sort();
        });
      });
    });
  }
  return includeNames;
}

// req10
function schedule(dayName) {
  const { hours } = data;
  const daysKeys = Object.keys(hours);
  const noParms = daysKeys.reduce((acc, key) => {
    const { open, close } = hours[key];
    const outStr = open - close === 0
      ? 'CLOSED'
      : `Open from ${open}am until ${close - 12}pm`;
    return { ...acc, ...{ [key]: outStr } };
  }, {});
  if (!dayName) {
    return noParms;
  }
  const [day, msg] = Object.entries(noParms).find(([day, _msg]) => day == dayName);
  return ({ [day]: msg });
}

// req11
function oldestFromFirstSpecies(employeeId) {
  const { animals, employees } = data;
  const employee = employees.find(({ id }) => id === employeeId);
  const firstEspecieId = employee.responsibleFor[0];
  const animal = animals.find(({ id }) => id === firstEspecieId);
  const { residents } = animal;
  const { name, sex, age } = residents.sort((a, b) => -(a.age - b.age))[0];
  return [name, sex, age];
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
