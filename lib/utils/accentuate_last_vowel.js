var unorm = require('unorm');
var addAcute = require('./add_acute');
var utils = require('../utils');

function replaceCharacter(characters,index,character) {
	return characters.substr(0, index) + addAcute(characters[index]) + characters.substr(index + 1);
}

function accentuateLastVowel(characters) {
	characters = unorm.nfc(characters); // necessary?

  var addedAcute = false;
  for(var x = characters.length - 1;x > -1;x--) {
  	if(!addedAcute && utils.isVowel(characters[x])) {
  		characters = replaceCharacter(characters,x,addAcute(characters[x]));
  		
  		return characters;
  	}
  }
  return characters;
}

module.exports = accentuateLastVowel;