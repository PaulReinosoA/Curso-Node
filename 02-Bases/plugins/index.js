// export * from './get-age-plugin';
// export * from './get-id-plugin';
const { getUid } = require('../plugins/get-id-plugin');
const { getAge } = require('../plugins/get-age-plugin');
const { http } = require('../plugins/http-client-plugin');

module.exports = { getUid, getAge, http };
