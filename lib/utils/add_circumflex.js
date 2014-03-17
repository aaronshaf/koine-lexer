var unorm = require('unorm');
const acute = String.fromCharCode(769);

module.exports = function(character) {
  return unorm.nfc(character.concat(acute));
};
