const sails = require('sails');
const sinon = require('sinon');

before(function(done) {
  this.timeout(10000); // Increase timeout for setup

  sails.lift({
    // configuration for testing
  }, function(err) {
    if (err) return done(err);

    // Mock sails.helpers.upload
    sinon.stub(sails.helpers, 'upload').resolves("fake_url");

    done();
  });
});

after(function(done) {
  sails.lower(done);
});
