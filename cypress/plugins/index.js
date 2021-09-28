require("dotenv").config();

module.exports = (on, config) => {
  config.env = process.env;
  return config;
};
