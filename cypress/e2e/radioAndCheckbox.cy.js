describe("RadioAndCheckbox", () => {
    
    // it("RadiioButton", () => {
    //     cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");

    //     //Visibility of Radio Buttons

    //     cy.get("[value='green']").should('be.visible');
    //     cy.get("[value='blue']").should('be.visible');
    //     cy.get("[value='yellow']").should('be.visible');
    //     cy.get("[value='orange']").should('be.visible');
    //     cy.get("[value='purple']").should('be.visible');

    //     //Selecting Radio Buttons

    //     cy.get("[value='purple']").check().should('be.checked');
    //     cy.get("[value='orange']").should('not.be.checked');

    //     cy.get("[value='yellow']").check().should('be.checked');
    //     cy.get("[value='purple']").should('not.be.checked');



    // })

    it("Checkbox", () => {
        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");

        //Visibility of checkboxes 

        cy.get("[value='option-1']").should('be.visible');
        cy.get("[value='option-2']").should('be.visible');
        cy.get("[value='option-3']").should('be.visible');
        cy.get("[value='option-4']").should('be.visible');
        

        //Selecting checkboxes 

        cy.get("[value='option-1']").check().should('be.checked');
       
        //unchecking the checkbox
        cy.get("[value='option-3']").uncheck().should('not.be.checked');

        //Select all checkboxes
        cy.get("input[type='checkbox']").check().should('be.checked');

        cy.get("input[type='checkbox']").uncheck().should('not.be.checked');

        //select the first checkbox
        cy.get("input[type='checkbox']").first().check().should('be.checked');
        cy.get("input[type='checkbox']").last().check().should('be.checked');

    })

})