/**
 * Ok reponse obj helper
 * @param {number} status - http status code
 * @param {any} data - data
 * @returns {ok: {status: string, data: string}}}
 */
function okRes(status, data) {
  return { ok: { status, data } };
}

/**
 * Error reponse obj helper
 * @param {number} status - http status code
 * @param {any} data - data
 * @returns {{error: {status: string, data: string}}}
 */
function errRes(status, data) {
  return { error: { status, data } };
}

module.exports = {
  okRes,
  errRes,
};