
const fetch = require('node-fetch');
module.exports.fetchAPI = (url = 'https://reqres.in/api/users?page=1') => {
  return fetch(url).then(res => res.json());
};
