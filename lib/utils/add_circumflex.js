var unorm = require('unorm');
const circumflex = String.fromCharCode(834);

module.exports = function(character) {
  return unorm.nfc(character.concat(circumflex));
};
