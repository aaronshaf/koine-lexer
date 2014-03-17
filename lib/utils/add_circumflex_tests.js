var assert = require("assert");
var addAcute = require('./add_circumflex');

describe('utils/addCircumflex', function() {
  it('should add circumflex to character', function() {
    assert.equal(addAcute('α'),'ᾶ');
    assert.equal(addAcute('ᾳ'),'ᾷ');
    assert.equal(addAcute('ω'),'ῶ');
  });
});
