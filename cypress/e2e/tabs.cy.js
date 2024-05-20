describe('handle-tab-approach1', () =>{

it('approach1', () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    
    cy.get(".example >a").invoke('removeAttr', 'target').click();

    cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');
    
    // cy.get('.elementor-element-067aa78 > .elementor-widget-container > .elementor-heading-title').should('have.value', 'The Sprout Advantage');
    // cy.get(".elementor-widget[data-id='067aa78'] h2").should('have.value', 'The Sprout Advantage');

    //opratinos
    cy.wait(5000);

    cy.go('back')
    
})

it('approach2', () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    
    cy.get(".example >a").then()

    cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');
    
    // cy.get('.elementor-element-067aa78 > .elementor-widget-container > .elementor-heading-title').should('have.value', 'The Sprout Advantage');
    // cy.get(".elementor-widget[data-id='067aa78'] h2").should('have.value', 'The Sprout Advantage');

    //opratinos
    cy.wait(5000);

    cy.go('back')
    
})

})