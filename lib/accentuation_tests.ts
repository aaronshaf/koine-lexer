import assert from "assert";
import { accentuateVerb } from "./accentuation";

describe("accentuation", function () {
  describe("accentuateVerb()", function () {
    it("should properly accentuate verbs", function () {
      [
        "λύω",
        "λύεις",
        "λύει",
        "λύομεν",
        "λύετε",
        "λύουσι",
        "ἐλυόμην",
        "ἐλύου",
        "ἐλύετο",
        "ἐλυόμεθα",
        "ἐλύεσθε",
        "ἐλύοντο",
        "ἄγγελος",
        "λόγος",
        "οἴκοις",
        "ἐφώτισεν",
        "καταβαίνουσαν",
        "λεγούσης",
        "ἐπιάσθη",
        "δούλου",
        "ἀκηκόαμεν",
        "λυ­θῇ",
      ].forEach(function (word) {
        assert.strictEqual(accentuateVerb(word), word);
      });
    });
  });

  /*
  describe('accentuateNoun()', function() {
    it('should properly accentuate nouns', function() {
      [
        'καρπός',
        'δοῦλος'
      ].forEach(function(word) {
        assert.strictEqual(accenting.accentuateNoun(word),word);
      });
    });
  });
  */
});
