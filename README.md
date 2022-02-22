# koine-lexer

[![Build Status](https://travis-ci.org/aaronshaf/koine-lexer.svg?branch=master)](https://travis-ci.org/aaronshaf/koine-lexer)
[![License](https://badgen.net/github/license/aaronshaf/koine-lexer)](./LICENSE)
[![Library minified size](https://badgen.net/bundlephobia/min/koine-lexer)](https://bundlephobia.com/result?p=koine-lexer)
[![Library minified + gzipped size](https://badgen.net/bundlephobia/minzip/koine-lexer)](https://bundlephobia.com/result?p=koine-lexer)

## Installation

This library is published in the NPM registry and can be installed using any compatible package manager.

```sh
npm install koine-lexer --save

# For Yarn, use the command below.
yarn add koine-lexer
```

### Installation from CDN

This module has an UMD bundle available through JSDelivr and Unpkg CDNs.

```html
<!-- For UNPKG use the code below. -->
<script src="https://unpkg.com/koine-lexer"></script>

<!-- For JSDelivr use the code below. -->
<script src="https://cdn.jsdelivr.net/npm/koine-lexer"></script>

<script>
  // UMD module is exposed through the "koineLexer" global variable.
  console.log(koineLexer);
</script>
```

## Usage

### Syllabification

```javascript
import syllabify from 'koine-lexer/lib/syllabify'
const syllables = syllabify('ἀκηκόαμεν');
```

```json
["ἀ","κη","κό","α","μεν"]
```

### Accentuation

```javascript
import accentuation from 'koine-lexer/lib/accentuation'
const accentedVerb = accentuation.accentuateVerb('ἀκηκοαμεν');
```

```json
"ἀκηκόαμεν"
```

### Amalgamation

```javascript
import amalgamate from 'koine-lexer/lib/amalgamate'
const amalgamatedVerb = amalgamate('πέμπσω');
```

```json
"πέμψω"
```

## License

Released under [MIT License](./LICENSE).

## See also

* [morphgnt/morphological-lexicon](https://github.com/morphgnt/morphological-lexicon)
