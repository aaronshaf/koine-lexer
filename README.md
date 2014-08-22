[![Build Status](https://travis-ci.org/aaronshaf/koine-lexer.png?branch=master)](https://travis-ci.org/aaronshaf/koine-lexer)
## Installation

```
npm install koine-lexer
```

## Syllabification

```javascript
var syllabify = require('koine-lexer/lib/syllabify');
var syllables = syllabify('ἀκηκόαμεν');
```

```json
["ἀ","κη","κό","α","μεν"]
```

## Accentuation

```javascript
var accentuation = require('koine-lexer/lib/accentuation');
var accentedVerb = accentuation.accentuateVerb('ἀκηκοαμεν');
```

```json
"ἀκηκόαμεν"
```

## Amalgamation

```javascript
var amalgamate = require('koine-lexer/lib/amalgamate');
var amalgamatedVerb = amalgamate('πέμπσω');
```

```json
"πέμψω"
```

## Testing

### Run all tests

```
npm test
```

### Run some tests

```
npm install mocha -g
mocha lib/utils/*_tests.js
```

## See also

* [morphgnt/morphological-lexicon](https://github.com/morphgnt/morphological-lexicon)
