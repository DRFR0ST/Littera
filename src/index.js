// @flow

const defaultOptions = {
  stackLanguages: false,
};

/**
 * @class
 * @public
 */
class Littera {
  /**
   * @constructor
   * @param {Object} translations
   * @param {Object} options
   */
  constructor(translations = {}, options = defaultOptions) {
    this.options = options;
    this.language = null;
    this.translations = translations;
  }

  /**
   * @description Returns the right translation for the adequate language.
   * @param {string} key The translation key.
   * @param {string} language (optional)
   * @example
   * translate("unique.example", "en_US");
   */
  translate = (key, language = this.language) => {
    if (language === null) throw new Error("Language is not set.");

    if (!this.translations || Object.keys(this.translations) <= 0)
      throw new Error(`Translations not found.`);

    return this.options.stackLanguages
      ? this.translations[key][language]
      : this.translations[language][key];
  };

  /**
   * @description Returns loaded translations.
   * @param {string} language Return translations for a specific language.
   * @returns {Object}
   */
  getTranslations = (language = null) => {
    if (language && (language.length <= 0 || !language instanceof String))
      throw new Error("Language is not a string or is empty.");

    if (this.options.stackLanguages || language) return this.translations[language];
    return this.translations;
  };

  /**
   * @description Loads translations.
   * @param {Object} translations
   */
  importTranslations = translations => {
    if (!translations || !translations instanceof Object)
      throw new Error("Translations is undefined or not an Object.");

    if (this.language === null)
      this.language = this.options.stackLanguages
        ? Object.keys(translations[Object.keys(translations)[0]])[0]
        : Object.keys(translations)[0];
    this.translations = translations;
  };

  /**
   * @description Sets the active language
   * @param {string} language
   */
  setLanguage = language => {
    if (!language) throw new Error("Language is undefined or not a String.");

    this.language = language;
  };

  /**
   * @description Returns the active language.
   * @returns {string}
   */
  activeLanguage = () => {
    if (!this.language) throw new Error("Language is not set.");
    return this.language;
  };

  /**
   * @description Returns a list of imported languages.
   * @returns {Array}
   */
  getLanguages = () => this.options.stackLanguages ? Object.keys(this.translations[Object.keys(this.translations)[0]]) : Object.keys(this.translations);
}

export default Littera;
