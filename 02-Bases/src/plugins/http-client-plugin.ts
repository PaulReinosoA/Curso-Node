// const axios = require('axios');

import axios from 'axios';

export const getHttpClientPlugin = {
  get: async (url: string) => {
    const resp = await axios.get(url);
    // const resp = await fetch(url);
    // const data = await resp.json();
    return resp;
  },

  post: async (url: string) => {},

  put: async (url: string) => {},

  delete: async (url: string) => {},
};
// module.exports = { http: getHttpClientPlugin };
