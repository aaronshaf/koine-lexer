import unorm from "unorm";

const acute = String.fromCharCode(769);

export default function (character: string) {
  return unorm.nfc(character.concat(acute));
}
