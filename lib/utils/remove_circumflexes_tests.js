var assert = require("assert");
var removeAcutes = require('./remove_circumflexes');

describe('utils/removeCircumflexes', function() {
  it('should remove acutes from words', function() {
    assert.equal(removeAcutes('ᾶ'),'α');
    assert.equal(removeAcutes('ῖ'),'ι');
    assert.equal(removeAcutes('ῶ'),'ω');
    assert.equal(removeAcutes('ῦ'),'υ');
  });
});
