var assert = require("assert");
var removeAcutes = require('./remove_acutes');

describe('utils/removeAcutes', function() {
  it('should remove acutes from words', function() {
    assert.equal(removeAcutes('γεγραμμένας'),'γεγραμμενας');
    assert.equal(removeAcutes('ἀκούοντι'),'ἀκουοντι');
    assert.equal(removeAcutes('ἄγγελόν'),'ἀγγελον');
    assert.equal(removeAcutes('βιβλίῳ'),'βιβλιῳ');
  });
});