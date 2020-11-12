import unorm from "unorm";

const circumflex = String.fromCharCode(834);

export default function (character: string) {
  return unorm.nfc(character.concat(circumflex));
}
