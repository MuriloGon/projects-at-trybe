/* eslint-disable max-lines-per-function */
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

const { animals, employees, prices, hours } = require('./data');

// req01
function animalsByIds(...ids) {
  return animals.filter(({ id }) => ids.includes(id));
}

// req02
function animalsOlderThan(animalsName, animalsAge) {
  return animals
    .find(({ name }) => name === animalsName)
    .residents
    .every(({ age }) => age >= animalsAge);
}

// req03
function employeeByName(employeeName) {
  if (!employeeName) return {};

  return employees.find(
    ({ firstName, lastName }) => [firstName, lastName].includes(employeeName),
  );
}

// req04
function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// req05
function isManager(idTest) {
  const { managers: { length } } = employees.find(({ id }) => id === idTest);
  return length === 0 || length === 1;
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
  employees.push(employeeAdded);
}

// req07
function animalCount(...species) {
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
  return Object
    .entries(entrants)
    .map(([key, value]) => value * prices[key])
    .reduce((acc, cValue) => acc + cValue);
}

// req 09
const noOptions = () => {
  const locations = [...new Set((animals.map(({ location }) => location)))];
  const genericObj = locations.reduce((acc, location) => {
    acc[location] = [];
    return acc;
  }, {});
  const noParms = { ...genericObj };
  animals.forEach(({ name, location }) => noParms[location].push(name));
  return noParms;
};

function sexCondition(sex, hasIncludeNames, includeNames) {
  if (sex !== null && hasIncludeNames) {
    const keys = Object.keys(includeNames);
    keys.forEach((key) => {
      includeNames[key].forEach((obj) => {
        const obj1 = obj;
        const animalKey = Object.keys(obj)[0];
        const out = animals.filter(({ name }) => name === animalKey).map((x) => x.residents)[0];
        const out2 = out.filter((x) => x.sex === sex);
        const out3 = out2.map((x) => x.name);
        obj1[animalKey] = out3;
      });
    });
  }
}

function orderCondition(isOrdered, hasIncludeNames, includeNames) {
  if (isOrdered && hasIncludeNames) {
    const keys = Object.keys(includeNames);
    keys.forEach((key) => {
      includeNames[key].forEach((obj) => {
        const obj1 = obj;
        const objKeys = Object.keys(obj);
        objKeys.forEach((objKey) => {
          obj1[objKey] = obj1[objKey].sort();
        });
      });
    });
  }
}

function animalMap(options = {}) {
  const hasIncludeNames = !!options.includeNames;
  const isOrdered = !!options.sorted;
  const sex = options.sex ? options.sex : null;
  const filterAnimalsByLocation = (loc) => animals.filter(({ location }) => location === loc);
  let includeNames = {};

  if (hasIncludeNames) {
    const locations = [...new Set((animals.map(({ location }) => location)))];
    locations.forEach((loc) => {
      const value = filterAnimalsByLocation(loc)
        .map((x1) => ({ [x1.name]: x1.residents.map((x2) => x2.name) }));
      includeNames = { ...includeNames, ...{ [loc]: value } };
    });
  } else return noOptions();
  sexCondition(sex, hasIncludeNames, includeNames);
  orderCondition(isOrdered, hasIncludeNames, includeNames);

  return includeNames;
}

// req10
function schedule(dayName) {
  const noParms = Object.keys(hours).reduce((acc, key) => {
    const { open, close } = hours[key];
    return {
      ...acc,
      [key]: (open - close === 0
        ? 'CLOSED'
        : `Open from ${open}am until ${close - 12}pm`),
    };
  }, {});
  if (!dayName) return noParms;
  return { [dayName]: noParms[dayName] };
}

// req11
function oldestFromFirstSpecies(employeeId) {
  const employee = employees.find(({ id }) => id === employeeId);
  const firstEspecieId = employee.responsibleFor[0];
  const animal = animals.find(({ id }) => id === firstEspecieId);
  const { residents } = animal;
  const { name, sex, age } = residents.sort((a, b) => -(a.age - b.age))[0];
  return [name, sex, age];
}

// req12
function increasePrices(percentage) {
  const perc = (100 + percentage) / 100;
  Object.keys(prices).forEach((key) => {
    const num = parseFloat((prices[key] * perc).toFixed(3));
    const int = Math.floor(num);
    const decimal = Math.ceil((num - int) * 100) / 100;
    prices[key] = int + decimal;
  });
}

// req13
const getEmployeeByIdOrName = (...queries) => employees.find(
  ({ firstName, lastName, id }) => queries.includes(firstName)
    || queries.includes(lastName) || queries.includes(id),
);

const getAnimalNameById = (animalId) => animals.find(({ id }) => id === animalId).name;

function employeeCoverage(idOrName) {
  if (!idOrName) {
    const allEmpIds = employees.map(({ id }) => id);
    let noParms = {};
    allEmpIds.forEach((empId) => {
      const { firstName, lastName, responsibleFor } = getEmployeeByIdOrName(empId);
      const animalsEspecies = responsibleFor.map((animalId) => getAnimalNameById(animalId));
      noParms = { ...noParms, ...{ [`${firstName} ${lastName}`]: animalsEspecies } };
    });
    return noParms;
  }
  const { firstName, lastName, responsibleFor } = getEmployeeByIdOrName(idOrName);
  const animalsEspecies = responsibleFor.map((animalId) => getAnimalNameById(animalId));
  return { [`${firstName} ${lastName}`]: animalsEspecies };
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
