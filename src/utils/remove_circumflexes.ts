function isNotCircumflex(character: string) {
  return character.charCodeAt(0) !== 834;
}

export default function (characters = '') {
  return characters
    .normalize('NFD')
    .split('')
    .filter(isNotCircumflex)
    .join('')
    .normalize('NFC');
}
