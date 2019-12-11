const chai = require('chai');
const expect = chai.expect;
const mockData = require('./mock-data');
const index = require('../index');
const nock = require('nock');

describe(' SFHC Contact Sync through CRM-Jobs-API ', function () {
  it('Test Jobs API with Active Audience', function (done) {
    nock('https://reqres.in').get(`/api/users?page=1`).reply(200, mockData.APIResponse);
    let result = index.APIAccess();
    result.then((res) => {
      expect(2).to.equal(3);
      done();
    }).catch(err => {
        expect(2).to.equal(3);
        done();
    });
  });
});
