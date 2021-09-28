const PESQUISAR = "Pesquisar";
const MARTIN = "Martin";
const INVERTED_MARTIN = "uᴉʇɹɐW";
const FRONT_URL = `https://${Cypress.env('GITHUB_USER')}-ft.herokuapp.com/.`
const Claudia = "Claudia"

describe("1 - Verifica se foi feito o deploy do frontend no Heroku", () => {
  beforeEach(() => {
    cy.visit(FRONT_URL);
  });
  it("Será validado que o botão de mudar de realidade existe", () => {
    cy.get(".change-reality").should("exist");
  });

  it("Será validado que a pesquisa funciona como deveria", () => {
    cy.contains(PESQUISAR).click();
    cy.contains(MARTIN).should("exist");
  });
  
  it("Será validado que o botão de mudar de realidade funciona.", () => {
    cy.contains("Mudar de Realidade").click();
    cy.contains(PESQUISAR).click();
    cy.contains(INVERTED_MARTIN).should("exist");
  });

  it("Será validado que os botões de próxima página e página anterior funcionam", () => {
    cy.contains(PESQUISAR).click();
    cy.contains(MARTIN).should("exist");
    cy.contains("Próximo").click();
    cy.contains("2").should("exist");
    cy.contains(Claudia).should("exist");
    cy.contains("Anterior").click();
    cy.contains("1").should("exist");
    cy.contains(MARTIN).should("exist");
  });
});
