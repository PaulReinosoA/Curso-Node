// const { v4: uuidv4 } = require('uuid');
import crypto from 'crypto';

export const getUid = () => {
  // return uuidv4();
  return crypto.randomUUID();
};

// module.exports = { getUid };
