const Rule = require('./Rule');

module.exports = class MaxLength extends Rule {
  defaultMessage = '{{field}} must be shorter than {{settings.length}} characters.';

  check(value) {
    const maxLength = parseInt(this.settings.length, 10);
    if (!maxLength || !value.hasOwnProperty('length')) {
      return true;
    }
    return (value.length <= maxLength);
  }
};
