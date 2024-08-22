// const getAgePlugin = require('get-age');
import moment from 'moment';

export const getAge = (birthdate: Date) => {
  if (!birthdate) return new Error('la fecha es requerida');
  const age = moment().diff(birthdate, 'years');
  // return getAge(birthday);
  console.log(typeof age)
  return typeof age === 'number' ? age : 0;
};

// module.exports = { getAge };
