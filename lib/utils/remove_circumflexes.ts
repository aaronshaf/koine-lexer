import unorm from "unorm";

function isNotCircumflex(character: string) {
  return character.charCodeAt(0) !== 834;
}

export default function (characters: string) {
  return unorm.nfc(
    unorm.nfd(characters).split("").filter(isNotCircumflex).join("")
  );
}
