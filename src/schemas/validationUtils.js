/**
 * @param {boolean} valid 
 * @param {string} message 
 * @returns {{valid: boolean, message: string}}
 */
function errObj(valid, message) {
  return { valid, message };
}

/**
 * @param {boolean} valid 
 * @returns {{valid: boolean}}
 */
 function validObj(valid) {
  return { valid };
}
module.exports = {
  errObj,
  validObj,
};