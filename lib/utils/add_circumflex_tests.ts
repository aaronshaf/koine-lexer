import addCircumflex from "./add_circumflex";
import assert from "assert";

describe("utils/addCircumflex", function () {
  it("should add circumflex to character", function () {
    assert.strictEqual(addCircumflex("α"), "ᾶ");
    assert.strictEqual(addCircumflex("ᾳ"), "ᾷ");
    assert.strictEqual(addCircumflex("ω"), "ῶ");
  });
});
