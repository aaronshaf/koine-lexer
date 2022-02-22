import assert from 'assert';
import removeAcutes from './remove_circumflexes';

describe('utils/removeCircumflexes', function () {
  it('should remove acutes from words', function () {
    assert.strictEqual(removeAcutes('ᾶ'), 'α');
    assert.strictEqual(removeAcutes('ῖ'), 'ι');
    assert.strictEqual(removeAcutes('ῶ'), 'ω');
    assert.strictEqual(removeAcutes('ῦ'), 'υ');
  });
});
