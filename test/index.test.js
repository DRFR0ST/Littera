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

describe("Littera with JSON", () => {
  const _littr = new Littera();

  test("import translations", () => {
    _littr.importJSON("../test/translations.json", () => {
      expect(_littr.translate("example", "de_DE")).toBe("Beispiel");
    });
  });
});

describe("Littera with YAML", () => {
  const _littr = new Littera();

  test("import translations", () => {
    _littr.importYAML("../test/translations.yaml", () => {
      expect(_littr.translate("example", "de_DE")).toBe("Beispiel");
    });
  });
});
