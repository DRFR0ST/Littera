import Littera from "../src";

describe("Littera base", () => {
  const littr = new Littera();

  const translations = {
    en_US: {
      example: "Example"
    },
    de_DE: {
      example: "Beispiel"
    }
  };

  test("import translations", () => {
    littr.importTranslations(translations);
    expect(littr.getTranslations()).toBe(translations);
  });

  describe("set language and translate", () => {
    littr.setLanguage("de_DE");

    test("check language variable", () => {
      expect(littr.activeLanguage()).toBe("de_DE");
    });

    test("check translation", () => {
      expect(littr.translate("example")).toBe("Beispiel");
    });
  });
});

describe("Littera stacked languages", () => {
  const translations = {
    example: {
      en_US: "Example",
      de_DE: "Beispiel"
    }
  };

  const littr = new Littera(translations, {stackLanguages: true});
  littr.setLanguage("de_DE");

  test("check translation", () => {
    expect(littr.translate("example")).toBe("Beispiel");
  });
});
