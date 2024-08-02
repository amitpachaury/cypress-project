// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// <reference types = "Cypress" />

Cypress.Commands.add('getIframe', (iframe)=>{
    return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);

})

// Custom command for the clicking on link using label

Cypress.Commands.add('clickJobRoles', (label)=>{
    
    cy.contains(new RegExp("^" + label + "$", "g"), {matchCase: false}).parent().within(() =>{
        cy.get('.job-role--hover-icon').trigger("mouseover", {force: true}).click();
    })
})

Cypress.Commands.add('clickJobFunctions', (label)=>{
    
    cy.contains(label).parent().within(() =>{
        cy.get('.action').trigger("mouseover", {force: true}).click();
    })
})

Cypress.Commands.add('generateRandomString', (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return cy.wrap(result);
});

        

Cypress.Commands.add('selectDropdown', (selector, dropdownSelector ) => {
//.SBR-industry-select
    cy.get(selector).click();
    // cy.contains(label).parent().within(() =>{
    //     cy.get('.form-check-input').click();
    // })
    // cy.get("input[placeholder]").type("Financial and Insurance Activities");
    // cy.get(".dropdown-content-container>div>.dropdown-selection").click();
    // .select-option-group industry
    // .dropdown-selection location
    cy.get(dropdownSelector)
            .its('length')
            .then((len) => {
        cy.get(dropdownSelector)
            .eq(Math.floor(Math.random() * ((len-1) - 0 + 1)) + 0)
            .click();
    })

})