import unorm from "unorm";

const circumflex = String.fromCharCode(834);

function isCircumflex(character: string) {
  return character === circumflex;
}

export default function (characters: string) {
  return unorm.nfd(characters).split("").some(isCircumflex);
}
