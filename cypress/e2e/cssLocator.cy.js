describe('CssLocator', () => {

    it("cssLocator", () => {
        cy.visit("https://benchmark-qa.sprout.ph/")
        cy.get("#header_login_btn").click() //id
        // cy.get("#username").type("apachaury@sprout.ph") // using id and tag is optional
        // cy.get("#username").type("apachaury@sprout.ph") // name="username"
        cy.get("[name='username']").type("apachaury@sprout.ph") // using attribute
        // cy.get("#password").type("Amit@1234") 
        cy.get("input.salary-benchmark-input[name='password']").type("Amit@1234") // with tag.className[attribute]
        // cy.get("#kc-login").click() // using class name and attribute pf-c-button pf-m-primary pf-m-block btn-lg salary-benchmark-primary-button mb-16px
        
        cy.get(".salary-benchmark-primary-button[name='login']").click()
        cy.get(".home-page-first-container-title").contains("Sprout") //using class name

        
    })


})