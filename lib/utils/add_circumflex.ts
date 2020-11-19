const circumflex = String.fromCharCode(834);

export default function (character: string) {
  return character.concat(circumflex).normalize("NFC");
}
