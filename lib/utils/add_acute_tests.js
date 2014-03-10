var assert = require("assert");
var addAcute = require('./add_acute');

describe('utils/addAcute', function() {
  it('should add acute to character', function() {
    assert.equal(addAcute('υ'),'ύ');
    assert.equal(addAcute('ἐ'),'ἔ');
  });
});
