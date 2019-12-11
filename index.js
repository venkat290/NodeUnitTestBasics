// require('./models');
const fetch = require('node-fetch');
const util = require('./util');
function APIAccess () {
  return util.fetchAPI().then(res => {
    return res;
  }).catch(err=>{
    return err;
  })
}

APIAccess();

module.exports = {
  APIAccess
};
