
![Travis CI status](https://travis-ci.org/aaronshaf/koine-lexer.png "Travis CI status")
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
