import addAcute from "./add_acute";
import assert from "assert";

describe("utils/addAcute", function () {
  it("should add acute to character", function () {
    assert.strictEqual(addAcute("υ"), "ύ");
    assert.strictEqual(addAcute("ἐ"), "ἔ");
  });
});
