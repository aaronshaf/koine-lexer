import unorm from "unorm";

function isNotGrave(character: string) {
  return character.charCodeAt(0) !== 768;
}

export default function (characters: string) {
  return unorm.nfc(unorm.nfd(characters).split("").filter(isNotGrave).join(""));
}
