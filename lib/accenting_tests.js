var assert = require("assert");
var accenting = require('./accenting');

describe('accenting', function() {
  describe('accentVerb()', function() {
    it('should properly accent verbs', function() {
      [
        'λύω',
        // 'λύεις',
        // 'λύει',
        // 'λύομεν',
        // 'λύετε',
        // 'λύουσι',
        // 'ἐλυόμην',
        // 'ἐλύου',
        // 'ἐλύετο',
        // 'ἐλυόμεθα',
        // 'ἐλύεσθε',
        // 'ἐλύοντο',
        // 'καρπός',
        // 'ἄγγελος',
        // 'λόγος',
        // 'οἴκοις',
        // 'ἐφώτισεν',
        // 'καταβαίνουσαν',
        // 'λεγούσης',
        // 'ἐπιάσθη'
      ].forEach(function(word) {
        assert.equal(accenting.accentVerb(word),word);
      });
    });
  });
});
