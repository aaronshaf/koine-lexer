import assert from 'assert';
import removeAcutes from './remove_acutes';

describe('utils/removeAcutes', function () {
  it('should remove acutes from words', function () {
    assert.strictEqual(removeAcutes('γεγραμμένας'), 'γεγραμμενας');
    assert.strictEqual(removeAcutes('ἀκούοντι'), 'ἀκουοντι');
    assert.strictEqual(removeAcutes('ἄγγελόν'), 'ἀγγελον');
    assert.strictEqual(removeAcutes('βιβλίῳ'), 'βιβλιῳ');
  });
});
