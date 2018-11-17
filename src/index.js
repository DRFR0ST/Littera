// @flow

/**
 * @class
 * @public
 */
class Littera {
  /**
   * @constructor
   * @param {Object} translations
   */
  constructor(translations = {}) {
    this.translations = translations;
    this.language = null;
  }

  /**
   * @description Returns the right translation for the adequate language.
   * @param {string} key The translation key.
   * @param {string} language (optional)
   * @example
   * translate("unique.example", "en_US");
   */
  translate = (key, language = this.language) => {
    if (language === null) throw Error("Language is not set.");
    if (
      this.translations === undefined ||
      !(this.translations[language] instanceof Object)
    )
      throw Error(`Translations for ${this.language} not found.`);

    return this.translations[language][key];
  };

  /**
   * @description Returns loaded translations.
   * @param {string} language Return translations for a specific language.
   * @returns {Object}
   */
  getTranslations = (language = null) => {
    if (language === null && !(language instanceof String))
      throw Error("Language is not a string.");

    if (language) return this.translations[language];
    return this.translations;
  };

  /**
   * @description Loads translations.
   * @param {Object} translations
   */
  importTranslations = translations => {
    if (!translations || !(translations instanceof Object))
      throw Error("Translations is undefined or not an Object.");

    if (this.language === null) this.language = Object.keys(translations)[0];
    this.translations = translations;
  };

  /**
   * @description Sets the active language
   * @param {string} language
   */
  setLanguage = language => {
    if (!language) throw Error("Language is undefined or not a String.");

    this.language = language;
  };

  /**
   * @description Returns the active language.
   * @returns {string}
   */
  activeLanguage = () => {
    if (!this.language) throw "Language is not set.";
    return this.language;
  };

  /**
   * @description Returns a list of imported languages.
   * @returns {Array}
   */
  getLanguages = () => Object.keys(this.language);
}

export default Littera;