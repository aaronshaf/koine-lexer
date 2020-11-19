function isNotAcute(character: string) {
  return character.charCodeAt(0) !== 769;
}
export default function (characters: string) {
  return characters
    .normalize("NFD")
    .split("")
    .filter(isNotAcute)
    .join("")
    .normalize("NFC");
}
