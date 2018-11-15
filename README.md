# Littera

🌐 Lightweight library making multilingualism easier.

![build](https://travis-ci.com/DRFR0ST/Littera.svg?branch=master)

## Install

Use `npm install littera` or clone/download the repository.

## Examples

The basic concept is that you load an object with translations for each language and then just get a string with the right translation returned adequate to the active language.

Most basic example

```javascript
// Import the library.
import Littera from "littera";

// Object containing translations for each language and key.
const translations = {
  en_US: {
    "unique.example": "Example"
  },
  pl_PL: {
    "unique.example": "Przykład"
  },
  de_DE: {
    "unique.example": "Beispiel"
  }
};

function main() {
  // Create an instance of Littera and load the translations.
  const _littera = new Littera(translations);

  // Set the active language to German (de_DE)
  _littera.setLanguage("de_DE");

  // Get the right translation for the active language using a key.
  const translation = _littera.translate("unique.example");
  console.log(translation); // Returns => Beispiel
}
```

Give it a try on _codesandbox_
[![Code Sandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/n5wlmrwwm4)

## Build instructions

After cloning the repo, install all dependencies using `npm install`.

Build the docs:
`npm run docs`

Build the coverage:
`npm run coverage`

Test the library:
`npm test`