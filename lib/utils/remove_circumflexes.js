var unorm = require('unorm');

function isNotCircumflex(character) {
  return character.charCodeAt(0) !== 834;
}

module.exports = function(characters) {
  return unorm.nfc(unorm.nfd(characters).split('').filter(isNotCircumflex).join(''));
};
