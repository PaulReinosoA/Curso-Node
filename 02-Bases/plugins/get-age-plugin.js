const getAgePlugin = require('get-age');

const getAge = (birthday) => {
  if (!birthday) return new Error('la fecha es requerida');

  return getAgePlugin(birthday);
};

module.exports = { getAge };
