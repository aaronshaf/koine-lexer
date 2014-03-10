var assert = require("assert");
var containsCircumflex = require('./contains_circumflex');

describe('utils/containsCircumflex', function() {
  it('should identify presence of circumflex', function() {
    assert.ok(containsCircumflex('πᾶς') === true,'πᾶς');
    assert.ok(containsCircumflex('ὑμῖν') === true,'ὑμῖν');
    assert.ok(containsCircumflex('τῶν') === true,'τῶν');
  });

  it('should identify absence of circumflex', function() {
    assert.ok(containsCircumflex('πατρός') === false,'πατρός');
    assert.ok(containsCircumflex('εἰπάτω') === false,'εἰπάτω');
    assert.ok(containsCircumflex('πόλεως') === false,'πόλεως');
  });
});