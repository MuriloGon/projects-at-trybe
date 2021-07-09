const mapIngredients = (data, strIngrendient = 'strIngredient(\\d+)') => {
  const keys = Object.keys(data);
  const ingredRegex = new RegExp(strIngrendient);
  const allIngredients = keys.filter((x) => ingredRegex.test(x));
  const ingredientListNums = allIngredients.map((x) => Number(x.match(ingredRegex)[1]));
  const start = Math.min(...ingredientListNums);
  const end = Math.max(...ingredientListNums);
  const output = [];
  for (let index = start; index <= end; index += 1) {
    const ingredient = data[`strIngredient${index}`];
    const measure = data[`strMeasure${index}`];
    const finished = false;
    if ((ingredient !== null && ingredient !== '')
      && (measure !== null && ingredient !== '')) {
      output.push({ ingredient, measure, finished, index });
    }
  }
  return output;
};

export default mapIngredients;
