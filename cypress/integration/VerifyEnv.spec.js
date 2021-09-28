const REACT_APP_HAWKINS_URL = "REACT_APP_HAWKINS_URL";
const REACT_APP_HAWKINS_TIMEOUT = "REACT_APP_HAWKINS_TIMEOUT";
const REACT_APP_UPSIDEDOWN_URL = "REACT_APP_UPSIDEDOWN_URL";
const REACT_APP_UPSIDEDOWN_TIMEOUT = "REACT_APP_UPSIDEDOWN_TIMEOUT";

describe("2 - Verifica as variáveis de ambiente do frontend", () => {
  it("Será validado se as variáveis do hawkins existem", () => {
    expect(Cypress.env(REACT_APP_HAWKINS_URL)).to.exist;
    expect(Cypress.env(REACT_APP_HAWKINS_TIMEOUT)).to.exist;
  });

  it("Será validado se as variáveis do upsidesown existem", () => {
    expect(Cypress.env(REACT_APP_UPSIDEDOWN_URL)).to.exist;
    expect(Cypress.env(REACT_APP_UPSIDEDOWN_TIMEOUT)).to.exist;
  });
});
