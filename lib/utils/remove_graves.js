var unorm = require('unorm');

function isNotGrave(character) {
  return character.charCodeAt(0) !== 768;
}

module.exports = function(characters) {
  return unorm.nfc(unorm.nfd(characters).split('').filter(isNotGrave).join(''));
};
