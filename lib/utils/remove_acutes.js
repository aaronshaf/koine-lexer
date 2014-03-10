var unorm = require('unorm');

function isNotAcute(character) {
  return character.charCodeAt(0) !== 769;
}

module.exports = function(characters) {
  return unorm.nfc(unorm.nfd(characters).split('').filter(isNotAcute).join(''));
};
