
/*** Error ***/
/**
 * Base erro object
 * @typedef {Object} ApiError
 * @property {number} code - Http statatus to be returned (ex: 200, 201, 400, etc)
 * @property {string} message - Error message (ex: "not_found")
 * @property {any} [data] - any data related to the error (optional)
 */


/*** Product Layer ***/
/**
 * Represent a product from the database
 * @typedef  {Object} Product
 * @property {string} _id - unique id from database for a given document
 * @property {string} name - product name
 * @property {number} quantity - product quantity
 */

/**
 * An object returned when the post was successfull
 * @typedef {Object} OkObj
 * @property {number} status
 * @property {Array<Product>} data
 */

/**
 * An object returned when the post was successfull
 * @typedef {Object} ErrorObj
 * @property {number} status
 * @property {ApiError} err
 */
