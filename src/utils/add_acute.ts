const acute = String.fromCharCode(769);

export default function (character = '') {
  return character.concat(acute).normalize('NFC');
}
