const FRONT_URL = `https://${Cypress.env('GITHUB_USER')}-ft.herokuapp.com/.`
const FRONT_URL_PROD = `https://${Cypress.env('GITHUB_USER')}-pd.herokuapp.com/.`

describe("3 - Verifica os multi-ambientes e modo de desenvolvimento", () => {
  it("Será validado que a tag de desenvolvimento foi encontrada no frontend de desenvolvimento", () => {
    cy.visit(FRONT_URL);
    cy.contains("Em desenvolvimento").should("exist");
  });
  
  it("Será validado que a tag de desenvolvimento não existe no frontend de produção", () => {
    cy.visit(FRONT_URL_PROD);
    cy.contains("Em desenvolvimento").should("not.exist");
  });
});
