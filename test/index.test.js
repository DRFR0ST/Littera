import Littera from "../src";

describe("Littera base", () => {
  const _littr = new Littera();

  const translations = {
    en_US: {
      example: "Example"
    },
    de_DE: {
      example: "Beispiel"
    }
  };

  test("import translations", () => {
    _littr.importTranslations(translations);
    expect(_littr.getTranslations()).toBe(translations);
  });

  describe("set language and translate", () => {
    _littr.setLanguage("de_DE");

    test("check language variable", () => {
      expect(_littr.activeLanguage()).toBe("de_DE");
    });

    test("check translation", () => {
      expect(_littr.translate("example")).toBe("Beispiel");
    });
  });
});
