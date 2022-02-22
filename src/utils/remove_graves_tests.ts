import assert from "assert";
import removeGraves from "./remove_graves";

describe("utils/removeGraves", function () {
  it("should remove graves from words", function () {
    assert.strictEqual(removeGraves("τὸ"), "το");
    assert.strictEqual(removeGraves("πληγὰς"), "πληγας");
    assert.strictEqual(removeGraves("ἃ"), "ἁ");
  });
});
