const { v4: uuidv4 } = require('uuid');

const getUid = () => {
  return uuidv4();
};

module.exports = { getUid };
