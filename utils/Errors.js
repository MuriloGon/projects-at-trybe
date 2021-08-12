module.exports = {
  resourceNotFound: (resource) => ({message: `${resource} não encontrado`}),
  apiError: (message, {status, code}, data=undefined) => ({
    status,
    err:{message, code, data}}
  ),
  error: {
    notFound: {code: 'not_found' , status: 404},
    notFoundStockProblem: {code: 'stock_problem' , status: 404},
    invalidData: {code: 'invalid_data' , status: 422},
  },
};
