const acute = String.fromCharCode(769);

export default function (character: string) {
  return character.concat(acute).normalize("NFC");
}
