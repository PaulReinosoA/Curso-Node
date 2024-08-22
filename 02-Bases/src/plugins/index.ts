// export * from './get-age-plugin';
// export * from './get-id-plugin';


// const { getUid } = require('../plugins/get-id-plugin');
// const { getAge } = require('../plugins/get-age-plugin');
// const { http } = require('../plugins/http-client-plugin');
// const buildLoger = require('../plugins/loger.plugin');
// module.exports = { getUid, getAge, http, buildLoger };

export { getAge } from './get-age-plugin';
export { getUid } from './get-id-plugin';
export { buildLogger } from './loger.plugin';
export { getHttpClientPlugin as http } from './http-client-plugin';