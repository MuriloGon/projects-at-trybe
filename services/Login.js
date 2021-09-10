const crypto = require('crypto');

class Login {
  static generateToken() {
    return crypto.randomBytes(8).toString('hex');
  }
}

module.exports = Login;