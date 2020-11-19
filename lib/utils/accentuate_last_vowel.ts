import addAcute from "./add_acute";
import { isVowel } from "../utils";

function replaceCharacter(characters: string, index: number) {
  return (
    characters.substr(0, index) +
    addAcute(characters[index]) +
    characters.substr(index + 1)
  );
}

function accentuateLastVowel(characters: string) {
  characters = characters.normalize("NFC"); // necessary?

  var addedAcute = false;
  for (var x = characters.length - 1; x > -1; x--) {
    if (!addedAcute && isVowel(characters[x])) {
      characters = replaceCharacter(characters, x);

      return characters;
    }
  }
  return characters;
}

export default accentuateLastVowel;
