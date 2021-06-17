const DEFAULT_QUESTION_AMOUNT = 5;

export const fetchQuestions = async (token, amount = DEFAULT_QUESTION_AMOUNT) => {
  const ENDPOINT = `https://opentdb.com/api.php?amount=${amount}&token=${token}`;
  const res = await fetch(ENDPOINT);
  const data = await res.json();
  return data.results;
};

export const number = 10;
