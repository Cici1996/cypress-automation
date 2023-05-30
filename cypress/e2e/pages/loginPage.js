import basePage from "./basePage"

const loginPage = {
    inputUserName:'#txtLogin',
    inputPassword:'#txtPassword',
    btnLogin:'#btnValidLogin',
    lblWeek:'#ctl00_cph1_agdCnt_lbl_semaine',
    fillInformations(){
        cy.get(this.inputUserName).type('super')
        cy.get(this.inputPassword).type('E5Ejkf7H8A')
    }
}

export default { ...loginPage, ...basePage }