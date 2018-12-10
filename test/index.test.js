import Littera from "../src";

const _translations = {
  en_US: {
    example: "Example",
  },
  de_DE: {
    example: "Beispiel",
  },
};

describe("Littera base", () => {
  const littr = new Littera();

  const translations = {
    en_US: {
      example: "Example",
    },
    de_DE: {
      example: "Beispiel",
    },
  };

  test("import translations", () => {
    littr.importTranslations(translations);
    expect(littr.getTranslations()).toBe(translations);
  });

  test("get translations", () => {
    expect(littr.getTranslations("de_DE")).toEqual(translations["de_DE"]);
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

  test("get languages", () => {
    expect(littr.getLanguages()).toEqual(Object.keys(translations));
  })
});

describe("Littera errors", () => {
  const littr = new Littera();

  describe("Get translations", () => {

    test("before setting language", () => {
      try {
        littr.getTranslations();
      } catch(e) {
        expect(e.message).toBe("Language is not a string or is empty.");
      }
    });

    test("not a string", () => {
      try {
        littr.getTranslations({});
      } catch(e) {
        expect(e.message).toBe("Language is not a string or is empty.");
      }
    });

    test("empty string", () => {
      try {
        littr.getTranslations("");
      } catch(e) {
        expect(e.message).toBe("Language is not a string or is empty.");
      }
    });
  });
  
  test("Translate without language", () => {
    try {
      littr.translate("example");
    } catch (e) {
      expect(e.message).toBe("Language is not set.");
    }
  });

  test("Active language", () => {
    try {
      littr.activeLanguage();
    } catch(e) {
      expect(e.message).toBe("Language is not set.")
    }
  });

  test("Set language", () => {
    try {
      littr.setLanguage();
    } catch (e) {
      expect(e.message).toBe("Language is undefined or not a String.");
    }
  });

  test("Translate without translations", () => {
    try {
      littr.setLanguage("en_US");
      littr.translate("example");
    } catch (e) {
      expect(e.message).toBe("Translations not found.");
    }
  });

  test("Set language on translations import", () => {
    try {
      littr.importTranslations();
    } catch (e) {
      expect(e.message).toBe("Translations is undefined or not an Object.");
    }
  });

  test("Get translations without passing language", () => {
    try {
      littr.getTranslations();
    } catch(e) {
      expect(e.message).toBe("Language is not a string or is empty.");
    }
  })
});

describe("Littera stacked languages", () => {
  const translations = {
    example: {
      en_US: "Example",
      de_DE: "Beispiel",
    },
  };

  const littr = new Littera(translations, { stackLanguages: true });
  littr.setLanguage("de_DE");

  test("check translation", () => {
    expect(littr.translate("example")).toBe("Beispiel");
  });
});

test("Stacked languages auto set language on import", () => {
  const translations = {
    example: {
      en_US: "Example",
      de_DE: "Beispiel",
    },
  };

  const littr = new Littera(translations, { stackLanguages: true });
  try {
    littr.importTranslations();
  } catch (e) {
    expect(e.message).toBe("Translations is undefined or not an Object.");
  }
});