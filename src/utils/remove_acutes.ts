function isNotAcute(character: string) {
  return character.charCodeAt(0) !== 769;
}
export default function (characters = '') {
  return characters
    .normalize('NFD')
    .split('')
    .filter(isNotAcute)
    .join('')
    .normalize('NFC');
}
