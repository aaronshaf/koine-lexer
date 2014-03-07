var verbs = require('./verbs');
var assert = require("assert");

describe('verbs', function(){
  describe('presentActiveIndicatives()', function(){
    it('should return present active indicatives for λύ', function() {
      var result = verbs.presentActiveIndicatives('λυ');
      assert.deepEqual(result.singular, {
        1: 'λύω',
        2: 'λύεις',
        3: 'λύει'
      });
      assert.deepEqual(result.plural, {
        1: 'λύομεν',
        2: 'λύετε',
        3: 'λύουσι'
      });
    });
  });

  describe('futureActiveIndicatives()', function(){
    it('should return future active indicatives for λύω', function() {
      var result = verbs.futureActiveIndicatives('λυ');
      assert.deepEqual(result.singular, {
        1: 'λύσω',
        2: 'λύσεις',
        3: 'λύσει'
      });
      assert.deepEqual(result.plural, {
        1: 'λύσομεν',
        2: 'λύσετε',
        3: 'λύσουσι'
      });
    });
  });

  describe('imperfectActiveIndicatives()', function(){
    it('should return imperfect active indicatives for λύ', function() {
      var result = verbs.imperfectActiveIndicatives('λυ');
      assert.deepEqual(result.singular, {
        1: 'ἔλυον',
        2: 'ἔλυες',
        3: 'ἔλυε'
      });
      assert.deepEqual(result.plural, {
        1: 'ἐλύομεν',
        2: 'ἐλύετε',
        3: 'ἔλυον'
      });
    });
  });

  describe('presentActiveSubjunctives()', function(){
    it('should return present active subjunctives for λύ', function() {
      var result = verbs.presentActiveSubjunctives('λυ');
      assert.deepEqual(result.singular, {
        1: 'λύω',
        2: 'λύῃς',
        3: 'λύῃ'
      });
      assert.deepEqual(result.plural, {
        1: 'λύωμεν',
        2: 'λύητε',
        3: 'λύωσι'
      });
    });
  });
});
