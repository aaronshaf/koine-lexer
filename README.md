<!-- [![Build Status](https://travis-ci.org/aaronshaf/koine-lexer.png?branch=master)](https://travis-ci.org/aaronshaf/koine-lexer) -->
## Installation

```
npm install koine-lexer
```

## Syllabification

```javascript
import syllabify from 'koine-lexer/lib/syllabify'
const syllables = syllabify('ἀκηκόαμεν');
```

```json
["ἀ","κη","κό","α","μεν"]
```

## Accentuation

```javascript
import accentuation from 'koine-lexer/lib/accentuation'
const accentedVerb = accentuation.accentuateVerb('ἀκηκοαμεν');
```

```json
"ἀκηκόαμεν"
```

## Amalgamation

```javascript
import amalgamate from 'koine-lexer/lib/amalgamate'
const amalgamatedVerb = amalgamate('πέμπσω');
```

```json
"πέμψω"
```

## See also

* [morphgnt/morphological-lexicon](https://github.com/morphgnt/morphological-lexicon)
