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

Translations can also be imported from a JSON or YAML file.

```javascript
// Import the library.
import Littera from "littera";

const translationsPath = "./translations.json"; // or "./translations.yaml" for YAML files.

function main() {
  // Create an instance of Littera and load the translations.
  const _littera = new Littera();

  // Import translations from a file.
  // Use importYAML(...) for YAML files.
  _littera.importJSON(translationsPath, () => {
    // Set the active language to German (de_DE)
    _littera.setLanguage("de_DE");

    // Get the right translation for the active language using a key.
    const translation = _littera.translate("unique.example");
    console.log(translation); // Returns => Beispiel
  });
}
```

## Build instructions

After cloning the repo, install all dependencies using `npm install`.

Build the docs:
`npm run docs`

Build the coverage:
`npm run coverage`

Test the library:
`npm test`

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [constructor](#constructor)
    -   [Parameters](#parameters)
-   [getTranslations](#gettranslations)
    -   [Parameters](#parameters-1)
-   [importTranslations](#importtranslations)
    -   [Parameters](#parameters-2)
-   [importJSON](#importjson)
    -   [Parameters](#parameters-3)
-   [importYAML](#importyaml)
    -   [Parameters](#parameters-4)
-   [setLanguage](#setlanguage)
    -   [Parameters](#parameters-5)
-   [activeLanguage](#activelanguage)
-   [getLanguages](#getlanguages)
-   [translate](#translate)
    -   [Parameters](#parameters-6)

### constructor

#### Parameters

-   `translations` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**  (optional, default `{}`)

### getTranslations

Returns loaded translations.

#### Parameters

-   `language` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Return translations for a specific language.

Returns **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### importTranslations

Loads translations.

#### Parameters

-   `translations` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### importJSON

Imports translations from a JSON file.

Type: [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)

#### Parameters

-   `path` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Path to the JSON file.
-   `callback` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** [importTranslations](#importtranslations)

### importYAML

Imports translations from a YAML file.

Type: [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)

#### Parameters

-   `path` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Path to the YAML file.
-   `callback` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** [importTranslations](#importtranslations)

### setLanguage

Sets the active language

#### Parameters

-   `language` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### activeLanguage

Returns the active language.

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### getLanguages

Returns a list of imported languages.

Returns **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

### translate

Returns the right translation for the adequate language.

#### Parameters

-   `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The translation key.
-   `language` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** (optional)
