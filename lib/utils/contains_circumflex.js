var unorm = require('unorm');
const circumflex = String.fromCharCode(834);

function isCircumflex(character) {
  return character === circumflex;
}

module.exports = function(characters) {
  return unorm.nfd(characters).split('').some(isCircumflex);
};