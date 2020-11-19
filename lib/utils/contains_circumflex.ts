const circumflex = String.fromCharCode(834);

function isCircumflex(character: string) {
  return character === circumflex;
}

export default function (characters: string) {
  return characters.normalize("NFD").split("").some(isCircumflex);
}
