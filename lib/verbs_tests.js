var verbs = require("./verbs");
var assert = require("assert");

var λύω = {
  present: {
    active: {
      indicatives: {
        singular: {
          1: "λύω",
          2: "λύεις",
          3: "λύει"
        },
        plural: {
          1: "λύομεν",
          2: "λύετε",
          3: "λύουσι"
        }
      },
      subjunctives: {
        singular: {
          1: "λύω",
          2: "λύῃς",
          3: "λύῃ"
        },
        plural: {
          1: "λύωμεν",
          2: "λύητε",
          3: "λύωσι"
        }
      },
      imperatives: {
        singular: {
          1: null,
          2: "λύε",
          3: "λυέτω"
        },
        plural: {
          1: null,
          2: "λύετε",
          3: "λυέτωσαν"
        }
      }
    }    
  },
  future: {
    active: {
      indicatives: {
        singular: {
          1: "λύσω",
          2: "λύσεις",
          3: "λύσει" 
        },
        plural: {
          1: "λύσομεν",
          2: "λύσετε",
          3: "λύσουσι"
        }
      }
    }
  },
  imperfect: {
    active: {
      indicatives: {
        singular: {
          1: "ἔλυον",
          2: "ἔλυες",
          3: "ἔλυε"
        },
        plural: {
          1: "ἐλύομεν",
          2: "ἐλύετε",
          3: "ἔλυον"
        }
      }
    }
  }
};

describe("verbs", function(){
  describe("presentActiveIndicatives()", function(){
    it("should return present active indicatives for λύ", function() {
      var result = verbs.presentActiveIndicatives("λύ");
      assert.deepEqual(result.singular, λύω.present.active.indicatives.singular);
      assert.deepEqual(result.plural, λύω.present.active.indicatives.plural);
    });
  });

  describe("futureActiveIndicatives()", function(){
    it("should return future active indicatives for λύ", function() {
      var result = verbs.futureActiveIndicatives("λύ");
      assert.deepEqual(result.singular, λύω.future.active.indicatives.singular);
      assert.deepEqual(result.plural, λύω.future.active.indicatives.plural);
    });
  });

  describe("imperfectActiveIndicatives()", function(){
    it("should return imperfect active indicatives for λύ", function() {
      var result = verbs.imperfectActiveIndicatives("λύ");
      assert.deepEqual(result.singular, λύω.imperfect.active.indicatives.singular);
      assert.deepEqual(result.plural, λύω.imperfect.active.indicatives.plural);
    });
  });

  describe("presentActiveSubjunctives()", function(){
    it("should return present active subjunctives for λύ", function() {
      var result = verbs.presentActiveSubjunctives("λύ");
      assert.deepEqual(result.singular, λύω.present.active.subjunctives.singular);
      assert.deepEqual(result.plural, λύω.present.active.subjunctives.plural);
    });
  });
});
