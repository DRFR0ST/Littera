# littera

🌐 Lightweight library making multilingualism easier.

## API

#### Table of Contents

-   [getTranslations](#gettranslations)
    -   [Parameters](#parameters)
-   [importTranslations](#importtranslations)
    -   [Parameters](#parameters-1)
-   [importJSON](#importjson)
    -   [Parameters](#parameters-2)
-   [importYAML](#importyaml)
    -   [Parameters](#parameters-3)
-   [setLanguage](#setlanguage)
    -   [Parameters](#parameters-4)
-   [activeLanguage](#activelanguage)
-   [getLanguages](#getlanguages)
-   [translate](#translate)
    -   [Parameters](#parameters-5)

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
