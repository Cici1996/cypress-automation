import page from "../pages/loginPage";

describe('Login Admin', () => {
    beforeEach(() => {
        page.goto()
    })

    it('Fill the Informations', () => {
        page.fillInformations()
        cy.get(page.btnLogin).click()
        cy.get(page.lblWeek).should('have.text','Semaine')
    });
    
});
