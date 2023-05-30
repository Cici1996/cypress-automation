const basePage = {
    baseUrl: 'https://app-cre-scf-v4.net1-01.test.voxteneo.com/',
    goto(relativeUrl = "") {
        cy.visit(`${this.baseUrl}${relativeUrl}`)
    }
}

export default basePage