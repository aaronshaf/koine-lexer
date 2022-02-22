const circumflex = String.fromCharCode(834);

export default function (character = '') {
  return character.concat(circumflex).normalize('NFC');
}
