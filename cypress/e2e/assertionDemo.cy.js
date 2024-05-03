describe("Assertion Demo", () => {

    it("test case Implicit Assertion", () => {

        cy.visit("https://benchmark-qa.sprout.ph/")

        //Assertion using should
        // cy.url().should('include', 'benchmark-qa')
        // cy.url().should('eq', 'https://benchmark-qa.sprout.ph/')
        // cy.url().should('contain', 'benchmark')

        //or

        // cy.url().should('include', 'benchmark-qa')
        // .should('eq', 'https://benchmark-qa.sprout.ph/')
        // .should('contain', 'benchmark')

       //or

       cy.url().should('include', 'benchmark-qa')
        .and('eq', 'https://benchmark-qa.sprout.ph/')
        .and('contain', 'benchmark')
        .and('not.contain', 'prod')

        //We can create the webelements using Cypress as well.

        //Assertion of element is displayed and visible.
        cy.get('.home-salary-container > .home-page-second-container > img').should('be.visible')
        .and('exist');

        //Get all the links Assertion and How many links are present

        cy.get('a.text-body').should('have.length', '9')

        //Verify that right value is filled in the field

        cy.get("#header_login_btn").click();
        cy.get("[name='username']").type("apachaury@sprout.ph");
        cy.get("[name='username']").should('have.value', 'apachaury@sprout.ph');




    })


    it("Explicit Assertion", () => {

        cy.visit("https://benchmark-qa.sprout.ph/")

        //Login Process
        cy.get("#header_login_btn").click() //id
        cy.get("[name='username']").type("apachaury@sprout.ph") // using attribute
        cy.get("input.salary-benchmark-input[name='password']").type("Amit@1234") // with tag.className[attribute]
        cy.get(".salary-benchmark-primary-button[name='login']").click()
        cy.get(".home-page-first-container-title").contains("Sprout") //using class name
        
        //For the explicit assertion we need to create the JS function

        let name  = "Amit Pachaury";

        cy.get('#header_dropdown_container').then ( (x) => {

            let actualName = x.text();
            //BDD style Assertion
            expect(actualName).to.equal(name);
            expect(actualName).to.not.equal(name);

            //TDD style of assetion
            assert.equal(actualName,name);
            assert.notEqual(actualName,name);
        })


    })
})