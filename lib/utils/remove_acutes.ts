import unorm from "unorm";

function isNotAcute(character: string) {
  return character.charCodeAt(0) !== 769;
}
export default function (characters: string) {
  return unorm.nfc(unorm.nfd(characters).split("").filter(isNotAcute).join(""));
}
