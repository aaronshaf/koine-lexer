function isNotGrave(character: string) {
  return character.charCodeAt(0) !== 768;
}

export default function (characters = '') {
  return characters
    .normalize('NFD')
    .split('')
    .filter(isNotGrave)
    .join('')
    .normalize('NFC');
}
