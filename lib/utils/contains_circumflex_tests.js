var assert = require("assert");
var containsCircumflex = require('./contains_circumflex');

describe('utils/containsCircumflex', function() {
  it('should identify presence of circumflex', function() {
    assert(containsCircumflex('πᾶς') === true,'πᾶς');
    assert(containsCircumflex('ὑμῖν') === true,'ὑμῖν');
    assert(containsCircumflex('τῶν') === true,'τῶν');
  });

  it('should identify absence of circumflex', function() {
    assert(containsCircumflex('πατρός') === false,'πατρός');
    assert(containsCircumflex('εἰπάτω') === false,'εἰπάτω');
    assert(containsCircumflex('πόλεως') === false,'πόλεως');
  });
});