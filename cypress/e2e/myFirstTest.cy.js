describe('My First Test', () => {

    it('verifyBenchMark', () => {
        cy.visit("https://benchmark-qa.sprout.ph/")
        cy.viewport(1920, 692)
        cy.title().should('eq', 'BenchMark')
        
    })

    it('verifyBenchMark Negative', () => {
        cy.visit("https://benchmark-qa.sprout.ph/")
        cy.title().should('eq', 'BenchMark121')
    })

})