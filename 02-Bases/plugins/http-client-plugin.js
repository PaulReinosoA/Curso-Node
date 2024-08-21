const axios = require('axios');

const getHttpClientPlugin = {
  get: async (url) => {
    const resp = await axios.get(url);
    // const resp = await fetch(url);
    // const data = await resp.json();    
    return resp;
  },

  post: async (url) => {},

  put: async (url) => {},

  delete: async (url) => {},
};
module.exports = { http: getHttpClientPlugin };
