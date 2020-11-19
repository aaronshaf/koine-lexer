function isNotCircumflex(character: string) {
  return character.charCodeAt(0) !== 834;
}

export default function (characters: string = "") {
  return characters
    .normalize("NFD")
    .split("")
    .filter(isNotCircumflex)
    .join("")
    .normalize("NFC");
}
