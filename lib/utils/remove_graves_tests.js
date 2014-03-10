var assert = require("assert");
var removeGraves = require('./remove_graves');

describe('utils/removeGraves', function() {
  it('should remove graves from words', function() {
    assert.equal(removeGraves('τὸ'),'το');
    assert.equal(removeGraves('πληγὰς'),'πληγας');
    assert.equal(removeGraves('ἃ'),'ἁ');
  });
});